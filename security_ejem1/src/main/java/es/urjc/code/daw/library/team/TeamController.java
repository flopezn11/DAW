package es.urjc.code.daw.library.team;

import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.team.TeamController.TeamListView;
import es.urjc.code.daw.library.player.Player;
import es.urjc.code.daw.library.team.Team;

@RestController
@RequestMapping("/teams")
public class TeamController {
	
	interface TeamListView extends Team.BasicAtt, Team.PlayersAtt, Player.BasicAtt {}
	
	private static final Logger log = LoggerFactory.getLogger(TeamController.class);

	@Autowired
	private TeamRepository repository;
	
	@JsonView(TeamListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Team> getTeams() {
		return repository.findAll();
	}
	
	@JsonView(TeamListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Team> getTeam(@PathVariable long id) {

		log.info("Get team {}", id);

		Team team = repository.findOne(id);
		if (team != null) {
			return new ResponseEntity<>(team, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(TeamListView.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Team newTeam(@RequestBody Team team) {
		log.info("vamos");
		repository.save(team);

		return team;
	}

	@JsonView(TeamListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Team> updateTeam(@PathVariable long id, @RequestBody Team updatedTeam) {

		Team team = repository.findOne(id);
		if (team != null) {

			updatedTeam.setId(id);
			repository.save(updatedTeam);

			return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(TeamListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Team> deleteTeam(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

package es.urjc.code.daw.library.maatch;

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

import es.urjc.code.daw.library.player.Player;
import es.urjc.code.daw.library.schedule.Schedule;
import es.urjc.code.daw.library.maatch.MaatchController.MaatchView;
import es.urjc.code.daw.library.team.Team;

@RestController
@RequestMapping("/matches")
public class MaatchController {

	interface MaatchView extends Maatch.BasicAtt, Maatch.TeamAtt, Maatch.ScheduleAtt, Team.BasicAtt, Schedule.BasicAtt {}
	
	private static final Logger log = LoggerFactory.getLogger(MaatchController.class);

	@Autowired
	private MaatchRepository repository;

	@JsonView(MaatchView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Maatch> getMatches() {
		return repository.findAll();
	}

	@JsonView(MaatchView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Maatch> getMatch(@PathVariable long id) {

		log.info("Get player {}", id);

		Maatch match = repository.findOne(id);
		if (match != null) {
			return new ResponseEntity<>(match, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(MaatchView.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Maatch newMatch(@RequestBody Maatch match) {

		repository.save(match);
		return match;
	}

	@JsonView(MaatchView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Maatch> updateMatch(@PathVariable long id, @RequestBody Maatch updatedMatch) {

		Maatch match = repository.findOne(id);
		if (match != null) {

			updatedMatch.setId(id);
			repository.save(updatedMatch);

			return new ResponseEntity<>(updatedMatch, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(MaatchView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Maatch> deleteMatch(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

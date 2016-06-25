package es.urjc.code.daw.library.player;

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

import es.urjc.code.daw.library.player.PlayerController.PlayerView;
import es.urjc.code.daw.library.player.Player;
import es.urjc.code.daw.library.team.Team;

@RestController
@RequestMapping("/players")
public class PlayerController {
	
	interface PlayerView extends Player.BasicAtt, Player.TeamAtt, Team.BasicAtt {}

	private static final Logger log = LoggerFactory.getLogger(PlayerController.class);

	@Autowired
	private PlayerRepository repository;

	@JsonView(PlayerView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Player> getPlayers() {
		return repository.findAll();
	}

	@JsonView(PlayerView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Player> getPlayer(@PathVariable long id) {

		log.info("Get player {}", id);

		Player player = repository.findOne(id);
		if (player != null) {
			return new ResponseEntity<>(player, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(PlayerView.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Player newPlayer(@RequestBody Player player) {

		repository.save(player);
		return player;
	}

	@JsonView(PlayerView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Player> updatePlayer(@PathVariable long id, @RequestBody Player updatedPlayer) {

		Player player = repository.findOne(id);
		if (player != null) {

			updatedPlayer.setId(id);
			repository.save(updatedPlayer);

			return new ResponseEntity<>(updatedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(PlayerView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Player> deletePlayer(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

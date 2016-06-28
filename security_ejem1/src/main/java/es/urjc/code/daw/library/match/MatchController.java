package es.urjc.code.daw.library.match;

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

@RestController
@RequestMapping("/matches")
public class MatchController {

	private static final Logger log = LoggerFactory.getLogger(MatchController.class);

	@Autowired
	private MatchRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<MatchX> getMatches() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<MatchX> getMatch(@PathVariable long id) {

		log.info("Get player {}", id);

		MatchX match = repository.findOne(id);
		if (match != null) {
			return new ResponseEntity<>(match, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public MatchX newMatch(@RequestBody MatchX match) {

		repository.save(match);
		return match;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<MatchX> updateMatch(@PathVariable long id, @RequestBody MatchX updatedMatch) {

		MatchX match = repository.findOne(id);
		if (match != null) {

			updatedMatch.setId(id);
			repository.save(updatedMatch);

			return new ResponseEntity<>(updatedMatch, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<MatchX> deleteMatch(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

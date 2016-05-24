package es.urjc.code.daw.library.principal;

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
@RequestMapping("/principal")
public class PrincipalController {

	private static final Logger log = LoggerFactory.getLogger(PrincipalController.class);

	@Autowired
	private PrincipalRepository principalRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Principal> getPrincipales() {
		return principalRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Principal> getPrincipal(@PathVariable long id) {

		log.info("Get principal {}", id);

		Principal principal = principalRepository.findOne(id);
		if (principal != null) {
			return new ResponseEntity<>(principal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Principal newPrincipal(@RequestBody Principal principal) {

		principalRepository.save(principal);
		return principal;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Principal> updatePrincipal(@PathVariable long id, @RequestBody Principal updatedPrincipal) {

		Principal principal = principalRepository.findOne(id);
		if (principal != null) {

			updatedPrincipal.setId(id);
			principalRepository.save(updatedPrincipal);

			return new ResponseEntity<>(updatedPrincipal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Principal> deletePrincipal(@PathVariable long id) {

		if (principalRepository.exists(id)) {
			principalRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

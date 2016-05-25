package es.urjc.code.daw.library.principal;

import java.util.Collection;

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
	private PrincipalRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Principal> getPrincipal() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Principal> getPrincipal(@PathVariable long id) {

		log.info("Get new {}", id);

		Principal anuncio = repository.findOne(id);
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Principal> actulizaPrincipal(@PathVariable long id, @RequestBody Principal updatedPrincipal) {

		Principal principal = repository.findOne(id);
		if (principal != null) {

			updatedPrincipal.setId(id);
			repository.save(updatedPrincipal);

			return new ResponseEntity<>(updatedPrincipal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

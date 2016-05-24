package es.urjc.code.daw.library.schedule;

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
@RequestMapping("/schedules")
public class ScheduleController {

	private static final Logger log = LoggerFactory.getLogger(ScheduleController.class);

	@Autowired
	private ScheduleRepository scheduleRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Schedule> getSchedules() {
		return scheduleRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Schedule> getSchedule(@PathVariable long id) {

		log.info("Get schedule {}", id);

		Schedule schedule = scheduleRepository.findOne(id);
		if (schedule != null) {
			return new ResponseEntity<>(schedule, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Schedule newSchedule(@RequestBody Schedule schedule) {

		scheduleRepository.save(schedule);

		return schedule;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Schedule> updateSchedule(@PathVariable long id, @RequestBody Schedule updatedSchedule) {

		Schedule schedule = scheduleRepository.findOne(id);
		if (schedule != null) {

			updatedSchedule.setId(id);
			scheduleRepository.save(updatedSchedule);

			return new ResponseEntity<>(updatedSchedule, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Schedule> deleteSchedule(@PathVariable long id) {

		if (scheduleRepository.exists(id)) {
			scheduleRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

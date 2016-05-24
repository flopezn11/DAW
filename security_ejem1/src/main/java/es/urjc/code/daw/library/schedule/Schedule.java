package es.urjc.code.daw.library.schedule;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	public Schedule() {}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}

}

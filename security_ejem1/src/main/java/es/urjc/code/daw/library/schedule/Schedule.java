package es.urjc.code.daw.library.schedule;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.maatch.Maatch;
import es.urjc.code.daw.library.player.Player;
import es.urjc.code.daw.library.player.Player.BasicAtt;


@Entity
public class Schedule {

	public interface BasicAtt {}
	public interface MaatchAtt {}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	private int journey;
	
	@JsonView(MaatchAtt.class)
	@OneToMany(mappedBy="schedule", cascade= CascadeType.ALL)
	private List<Maatch> matches = new ArrayList<>();
	
	public Schedule(int journey) {
		super();
		this.journey = journey;
	}

	public Schedule() {}
	
	public int getJourney() {
		return journey;
	}

	public void setJourney(int journey) {
		this.journey = journey;
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}

}

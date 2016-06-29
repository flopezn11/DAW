package es.urjc.code.daw.library.maatch;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

import es.urjc.code.daw.library.schedule.Schedule;
import es.urjc.code.daw.library.team.Team;
import es.urjc.code.daw.library.team.Team.BasicAtt;


@Entity
public class Maatch {

	public interface BasicAtt {}
	public interface TeamAtt {}
	public interface ScheduleAtt {}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@JsonView(BasicAtt.class)
    private String date;
    
	@JsonView(ScheduleAtt.class)
    @ManyToOne
    private Schedule schedule;
    
	@JsonView(TeamAtt.class)
    @ManyToOne
    private Team local;
    
	@JsonView(TeamAtt.class)
    @ManyToOne
    private Team visitor;
    
	@JsonView(BasicAtt.class)
    private int resultLocal;
	@JsonView(BasicAtt.class)
    private int resultVisitor;
	
	public Maatch() {
		//super();
	}

	

	public Maatch(String date, int resultLocal,
			int resultVisitor) {
		super();
		this.date = date;
		this.resultLocal = resultLocal;
		this.resultVisitor = resultVisitor;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public Schedule getSchedule() {
		return schedule;
	}



	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}



	public Team getLocal() {
		return local;
	}



	public void setLocal(Team local) {
		this.local = local;
	}



	public Team getVisitor() {
		return visitor;
	}



	public void setVisitor(Team visitor) {
		this.visitor = visitor;
	}



	public int getResultLocal() {
		return resultLocal;
	}



	public void setResultLocal(int resultLocal) {
		this.resultLocal = resultLocal;
	}



	public int getResultVisitor() {
		return resultVisitor;
	}



	public void setResultVisitor(int resultVisitor) {
		this.resultVisitor = resultVisitor;
	}



	@Override
	public String toString() {
		return "Match [id=" + id + ", date=" + date + ", schedule=" + schedule + ", local=" + local + ", visitor="
				+ visitor + ", resultLocal=" + resultLocal + ", resultVisitor=" + resultVisitor + "]";
	}
	
}

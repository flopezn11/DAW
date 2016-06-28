package es.urjc.code.daw.library.match;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.*;

import es.urjc.code.daw.library.schedule.Schedule;
import es.urjc.code.daw.library.team.Team;

@Entity
public class MatchX {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    private String date;
    
    @OneToOne
    //@OneToOne(cascade=CascadeType.ALL)
    private Schedule schedule;
    
    @OneToOne
    //@OneToOne(cascade=CascadeType.ALL)
    private Team local;
    
    @OneToOne
    //@OneToOne(cascade=CascadeType.ALL)
    private Team visitor;
    
    private int resultLocal;
    private int resultVisitor;
	
	public MatchX() {
		//super();
	}

	

	public MatchX(String date, Schedule schedule, Team local, Team visitor, int resultLocal,
			int resultVisitor) {
		super();
		this.date = date;
		this.schedule = schedule;
		this.local = local;
		this.visitor = visitor;
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

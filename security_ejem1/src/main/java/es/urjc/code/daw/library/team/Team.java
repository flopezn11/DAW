package es.urjc.code.daw.library.team;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import es.urjc.code.daw.library.player.Player;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
    private String fullname;
    private String imgescudo;
    private String imgequipo;
    private String imgequipment;
    private String imgcoach;
    public String coach;
    
    @Column(length = 50000)
    public String description;
    
    @Column(length = 50000)
    public  String history;
    
    public int points;
    
    @OneToMany(mappedBy = "team")
    private List<Player> players;

	public Team() {}

	

	public Team(String fullname, String imgescudo, String imgequipo, String imgequipment, String imgcoach,
			String coach, String description, String history, int points) {
		super();
		this.fullname = fullname;
		this.imgescudo = imgescudo;
		this.imgequipo = imgequipo;
		this.imgequipment = imgequipment;
		this.imgcoach = imgcoach;
		this.coach = coach;
		this.description = description;
		this.history = history;
		this.points = points;
	}



	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getImgescudo() {
		return imgescudo;
	}

	public void setImgescudo(String imgescudo) {
		this.imgescudo = imgescudo;
	}

	public String getImgequipo() {
		return imgequipo;
	}

	public void setImgequipo(String imgequipo) {
		this.imgequipo = imgequipo;
	}

	public String getImgequipment() {
		return imgequipment;
	}

	public void setImgequipment(String imgequipment) {
		this.imgequipment = imgequipment;
	}

	public String getImgcoach() {
		return imgcoach;
	}

	public void setImgcoach(String imgcoach) {
		this.imgcoach = imgcoach;
	}

	public String getCoach() {
		return coach;
	}

	public void setCoach(String coach) {
		this.coach = coach;
	}

	public String getHistory() {
		return history;
	}

	public void setHistory(String history) {
		this.history = history;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}



	@Override
	public String toString() {
		return "Team [id=" + id + ", fullname=" + fullname + ", imgescudo=" + imgescudo + ", imgequipo=" + imgequipo
				+ ", imgequipment=" + imgequipment + ", imgcoach=" + imgcoach + ", coach=" + coach + ", description="
				+ description + ", history=" + history + ", points=" + points + "]";
	}

	

}

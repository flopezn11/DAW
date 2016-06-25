package es.urjc.code.daw.library.team;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

import es.urjc.code.daw.library.player.Player;

@Entity
public class Team {
	
	public interface BasicAtt {}
	public interface PlayersAtt {}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
    private String fullname;
	@JsonView(BasicAtt.class)
    private String imgescudo;
	@JsonView(BasicAtt.class)
    private String imgequipo;
	@JsonView(BasicAtt.class)
    private String imgequipment;
	@JsonView(BasicAtt.class)
    private String imgcoach;
	@JsonView(BasicAtt.class)
    public String coach;
    
    @JsonView(BasicAtt.class)
    @Column(length = 50000)
    public String description;
    
    @JsonView(BasicAtt.class)
    @Column(length = 50000)
    public  String history;
    
    @JsonView(BasicAtt.class)
    public int points;
    
    //@OneToMany(cascade = CascadeType.ALL,
    		//mappedBy = "team"/*, orphanRemoval = true*/)
    @JsonView(PlayersAtt.class)
    @OneToMany(mappedBy="team")
	private List<Player> players = new ArrayList<>();
    
	public Team() {
		//super();
		//players = new ArrayList<Player>();
	}

	public Team(String fullname, String imgescudo, String imgequipo, String imgequipment, String imgcoach,
			String coach, String description, String history) {
		super();
		this.fullname = fullname;
		this.imgescudo = imgescudo;
		this.imgequipo = imgequipo;
		this.imgequipment = imgequipment;
		this.imgcoach = imgcoach;
		this.coach = coach;
		this.description = description;
		this.history = history;
		this.points = 0;
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
	
	/*public void addPlayer(Player f) {
		 
        players.add(f);
    }*/

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
	
	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> comments) {
		this.players = comments;
	}



	@Override
	public String toString() {
		return "Team [id=" + id + ", fullname=" + fullname + ", imgescudo=" + imgescudo + ", imgequipo=" + imgequipo
				+ ", imgequipment=" + imgequipment + ", imgcoach=" + imgcoach + ", coach=" + coach + ", description="
				+ description + ", history=" + history + ", points=" + points + "]";
	}

	

}

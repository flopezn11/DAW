package es.urjc.code.daw.library.player;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import es.urjc.code.daw.library.team.Team;
import es.urjc.code.daw.library.user.User;

@Entity
public class Player {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String name;
	@Column(length = 50000)
	private String biography;
	
	@ManyToOne
	private Team team;
	
	private String lastname;
	private String position;
	private String nacionality;
	private String imagePlayer;
	private String image;
	private int age;
	private int goals;
	private int international;
	private int dorsal;
	private String video;
	
	public Player() {}

	public Player(long id, String name, String biography, Team team, String lastname, String position,
			String nacionality, String imagePlayer, String image, int age, int goals, int international, int dorsal,
			String video) {
		super();
		this.id = id;
		this.name = name;
		this.biography = biography;
		this.team = team;
		this.lastname = lastname;
		this.position = position;
		this.nacionality = nacionality;
		this.imagePlayer = imagePlayer;
		this.image = image;
		this.age = age;
		this.goals = goals;
		this.international = international;
		this.dorsal = dorsal;
		this.video = video;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getNacionality() {
		return nacionality;
	}

	public void setNacionality(String nacionality) {
		this.nacionality = nacionality;
	}

	public String getImagePlayer() {
		return imagePlayer;
	}

	public void setImagePlayer(String imagePlayer) {
		this.imagePlayer = imagePlayer;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getGoals() {
		return goals;
	}

	public void setGoals(int goals) {
		this.goals = goals;
	}

	public int getInternational() {
		return international;
	}

	public void setInternational(int international) {
		this.international = international;
	}

	public int getDorsal() {
		return dorsal;
	}

	public void setDorsal(int dorsal) {
		this.dorsal = dorsal;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", biography=" + biography + ", team=" + team + ", lastname="
				+ lastname + ", position=" + position + ", nacionality=" + nacionality + ", age=" + age + ", goals="
				+ goals + ", international=" + international + ", dorsal=" + dorsal + "]";
	}
	
}

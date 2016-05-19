package es.urjc.code.daw.library.news;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.urjc.code.daw.library.user.User;

@Entity
public class News {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String title;
	private String subtitle;
	private String author;
	
	@Column(length = 50000)
	private String description;
	private String imgnews;
	
	@OneToOne
	private User user;
	
	public News() {}
	
	
	public News(String title, String subtitle, String author, String description, String imgnews) {
		super();
		this.title = title;
		this.subtitle = subtitle;
		this.author = author;
		this.description = description;
		this.imgnews = imgnews;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getSubtitle() {
		return subtitle;
	}
	
	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImgnews() {
		return imgnews;
	}
	
	public void setImgnews(String imgnews) {
		this.imgnews = imgnews;
	}


	@Override
	public String toString() {
		return "News [id=" + id + ", title=" + title + ", subtitle=" + subtitle + ", author=" + author
				+ ", description=" + description + ", imgnews=" + imgnews + "]";
	}
	

	

}

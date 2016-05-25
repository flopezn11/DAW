package es.urjc.code.daw.library.principal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.urjc.code.daw.library.user.User;

@Entity
public class Principal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	private long idplayer1;
	private long idplayer2;
	private long idplayer3;
	private long idplayer4;
	private long idteam1;
	private long idteam2;
	private long idteam3;
	private long idteam4;
	private long idteamm1;
	private long idteamm2;
	private long idteamm3;
	private long idteamm4;
	
	public Principal() {}

	public Principal(long idplayer1, long idplayer2, long idplayer3, long idplayer4, long idteam1, long idteam2,
			long idteam3, long idteam4, long idteamm1, long idteamm2, long idteamm3, long idteamm4) {
		super();
		this.idplayer1 = idplayer1;
		this.idplayer2 = idplayer2;
		this.idplayer3 = idplayer3;
		this.idplayer4 = idplayer4;
		this.idteam1 = idteam1;
		this.idteam2 = idteam2;
		this.idteam3 = idteam3;
		this.idteam4 = idteam4;
		this.idteamm1 = idteamm1;
		this.idteamm2 = idteamm2;
		this.idteamm3 = idteamm3;
		this.idteamm4 = idteamm4;
	}

	public long getIdplayer1() {
		return idplayer1;
	}

	public void setIdplayer1(long idplayer1) {
		this.idplayer1 = idplayer1;
	}

	public long getIdplayer2() {
		return idplayer2;
	}

	public void setIdplayer2(long idplayer2) {
		this.idplayer2 = idplayer2;
	}

	public long getIdplayer3() {
		return idplayer3;
	}

	public void setIdplayer3(long idplayer3) {
		this.idplayer3 = idplayer3;
	}

	public long getIdplayer4() {
		return idplayer4;
	}

	public void setIdplayer4(long idplayer4) {
		this.idplayer4 = idplayer4;
	}

	public long getIdteam1() {
		return idteam1;
	}

	public void setIdteam1(long idteam1) {
		this.idteam1 = idteam1;
	}

	public long getIdteam2() {
		return idteam2;
	}

	public void setIdteam2(long idteam2) {
		this.idteam2 = idteam2;
	}

	public long getIdteam3() {
		return idteam3;
	}

	public void setIdteam3(long idteam3) {
		this.idteam3 = idteam3;
	}

	public long getIdteam4() {
		return idteam4;
	}

	public void setIdteam4(long idteam4) {
		this.idteam4 = idteam4;
	}

	public long getIdteamm1() {
		return idteamm1;
	}

	public void setIdteamm1(long idteamm1) {
		this.idteamm1 = idteamm1;
	}

	public long getIdteamm2() {
		return idteamm2;
	}

	public void setIdteamm2(long idteamm2) {
		this.idteamm2 = idteamm2;
	}

	public long getIdteamm3() {
		return idteamm3;
	}

	public void setIdteamm3(long idteamm3) {
		this.idteamm3 = idteamm3;
	}

	public long getIdteamm4() {
		return idteamm4;
	}

	public void setIdteamm4(long idteamm4) {
		this.idteamm4 = idteamm4;
	}

	@Override
	public String toString() {
		return "Principal [idplayer1=" + idplayer1 + ", idplayer2=" + idplayer2 + ", idplayer3=" + idplayer3
				+ ", idplayer4=" + idplayer4 + ", idteam1=" + idteam1 + ", idteam2=" + idteam2 + ", idteam3=" + idteam3
				+ ", idteam4=" + idteam4 + ", idteamm1=" + idteamm1 + ", idteamm2=" + idteamm2 + ", idteamm3="
				+ idteamm3 + ", idteamm4=" + idteamm4 + "]";
	}
	
	
	
	
	

	

}

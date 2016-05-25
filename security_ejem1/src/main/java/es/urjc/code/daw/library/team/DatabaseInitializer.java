package es.urjc.code.daw.library.team;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.news.News;
import es.urjc.code.daw.library.news.NewsRepository;
import es.urjc.code.daw.library.player.Player;
import es.urjc.code.daw.library.player.PlayerRepository;
import es.urjc.code.daw.library.principal.Principal;
import es.urjc.code.daw.library.principal.PrincipalRepository;
import es.urjc.code.daw.library.schedule.Schedule;
import es.urjc.code.daw.library.schedule.ScheduleRepository;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {


	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private NewsRepository newsRepository;
	
	@Autowired
	private ScheduleRepository scheduleRepository;
	
	@Autowired
	private PrincipalRepository principalRepository;

	@Override
	public void run(String... args) throws Exception {
		
		Team madrid = new Team("Real Madrid", "app/img/Shields/ShieldRealMadrid.png", 
				"app/img/Lineups/LineupRealMadrid.jpg", "app/img/Equipments/EquipmentRealMadrid.png", 
				"app/img/Coaches/Zidane.jpg" ,"Zinedine Zidane", "Add description", "Add history");
		
		Player p1 = new Player("Cristiano", "Add a biography", madrid,
				"Ronaldo", "Forward", "app/img/Flags/Portugal.png", "app/img/Players/CristianoRonaldo.jpg","app/img/PlayersIndex/CristianoRonaldo.jpg",
				31, 32, 90, 7, "app/Video/Cristiano.mp4");
		
		
		playerRepository.save(p1);
		
		Team valencia = new Team("Valencia", "app/img/Shields/ShieldRealMadrid.png", 
				"app/img/Lineups/LineupRealMadrid.jpg", "app/img/Equipments/EquipmentRealMadrid.png", 
				"app/img/Coaches/Zidane.jpg" ,"Zinedine Zidane", "Add description", "Add history");
		
		Player p2 = new Player("Alvaro", "Add a biography", valencia, "Negredo", "Forward",
				"app/img/Flags/Spain.png", "app/img/Players/Negredo.jpg","app/img/PlayersIndex/Negredo.jpg", 
				30, 12, 10, 7, "app/Video/Negredo.mp4");
		
		playerRepository.save(p2);
		
		// Sample Schedules
		
		scheduleRepository.save(new Schedule());
		
		
		
		//playerRepository.findOne(p1.getId()).getTeam().getPlayers().add(p1);
		//playerRepository.findOne(p2.getId()).getTeam().getPlayers().add(p2);
		
		
		
		
		
		
		//madrid.getPlayers().add(p1);
		/*playerRepository.save(new Player("Cristiano", "Add a biography", madrid ,
				"Ronaldo", "Forward", "app/img/Flags/Portugal.png", "app/img/Players/CristianoRonaldo.jpg","app/img/PlayersIndex/CristianoRonaldo.jpg",
				31, 32, 90, 7, "app/Video/Cristiano.mp4"));*/
		
		
		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		
		//Sample News
		newsRepository.save(new News("Paul Pogba signs for Real Madrid", 
				"Juventus announces that accepts the offer from Real Madrid for Paul Pogba. Juventus receives 80 million dollars in exchange for the player",
				"Álvaro Parras Gomez",
				"The french player Paul Pogba has signed a 5-year contract with Real Madrid. Juventus gets 80 million in exchange for the player. The player said in a Spanish television: 'I will live a dream I had since childhood'. Paul Labile Pogba (born 15 March 1993) is a French professional footballer who plays for France National Team. He operates primarily as a central midfielder and is comfortable at playing both in attack and defence. In Italy, he gained the nicknames Il Polpo Paul ('Paul the Octopus') for his long legs that look like tentacles during tackling or running and 'Pogboom' for his explosive style and energy on the pitch. He received the Golden Boy award for 2013, given to the best under-21 player in Europe, followed by the Bravo Award in 2014, awarded to the best under-23 player who has participated in European competitions.",
				"app/img/Players/PogbaNewsReal.jpeg"));
		
		
		
		
	}

}

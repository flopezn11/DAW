package es.urjc.code.daw.library.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.news.News;
import es.urjc.code.daw.library.news.NewsRepository;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {


	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private NewsRepository newsRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample teams

		teamRepository.save(new Team("Real Madrid", "app/img/Shields/ShieldRealMadrid.png", "app/img/Lineups/LineupRealMadrid.jpg", "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" ,"Zinedine Zidane", "Add description", "Add history",2));

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

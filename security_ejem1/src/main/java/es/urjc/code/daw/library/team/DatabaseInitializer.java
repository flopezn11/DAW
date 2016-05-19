package es.urjc.code.daw.library.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {


	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamRepository teamRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample teams

		teamRepository.save(new Team("Real Madrid", "app/img/Shields/ShieldRealMadrid.png", "app/img/Lineups/LineupRealMadrid.jpg", "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" ,"Zinedine Zidane", "Add description", "Add history",2));

		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		
		
		
	}

}

package es.urjc.code.daw.library.book;

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
	private BookRepository bookRepository;
	
	@Autowired
	private NewsRepository newsRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample books

		bookRepository.save(new Book("SUEÑOS DE ACERO Y NEON",
				"Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		bookRepository.save(new Book("LA VIDA SECRETA DE LA MENTE",
				"La vida secreta de la mentees un viaje especular que recorre el cerebro y el pensamiento: se trata de descubrir nuestra mente para entendernos hasta en los más pequeños rincones que componen lo que somos, cómo forjamos las ideas en los primeros días de vida, cómo damos forma a las decisiones que nos constituyen, cómo soñamos y cómo imaginamos, por qué sentimos ciertas emociones hacia los demás, cómo los demás influyen en nosotros, y cómo el cerebro se transforma y, con él, lo que somos."));
		bookRepository.save(new Book("CASI SIN QUERER",
				"El amor algunas veces es tan complicado como impredecible. Pero al final lo que más valoramos son los detalles más simples, los más bonitos, los que llegan sin avisar. Y a la hora de escribir sobre sentimientos, no hay nada más limpio que hacerlo desde el corazón. Y eso hace Defreds en este libro."));
		bookRepository.save(new Book("TERMINAMOS Y OTROS POEMAS SIN TERMINAR",
				"Recopilación de nuevos poemas, textos en prosa y pensamientos del autor. Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio."));
		bookRepository.save(new Book("LA LEGIÓN PERDIDA",
				"En el año 53 a. C. el cónsul Craso cruzó el Éufrates para conquistar Oriente, pero su ejército fue destrozado en Carrhae. Una legión entera cayó prisionera de los partos. Nadie sabe a ciencia cierta qué pasó con aquella legión perdida.150 años después, Trajano está a punto de volver a cruzar el Éufrates. ..."));

		//Sample news
		
		newsRepository.save(new News("Paul Pogba signs for Real Madrid", 
				"Juventus announces that accepts the offer from Real Madrid for Paul Pogba. Juventus receives 80 million dollars in exchange for the player",
				"Álvaro Parras Gomez",
				"The french player Paul Pogba has signed a 5-year contract with Real Madrid. Juventus gets 80 million in exchange for the player. The player said in a Spanish television: 'I will live a dream I had since childhood'. Paul Labile Pogba (born 15 March 1993) is a French professional footballer who plays for France National Team. He operates primarily as a central midfielder and is comfortable at playing both in attack and defence. In Italy, he gained the nicknames Il Polpo Paul ('Paul the Octopus') for his long legs that look like tentacles during tackling or running and 'Pogboom' for his explosive style and energy on the pitch. He received the Golden Boy award for 2013, given to the best under-21 player in Europe, followed by the Bravo Award in 2014, awarded to the best under-23 player who has participated in European competitions.",
				"app/img/Players/PogbaNewsReal.jpeg"));
		
		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}

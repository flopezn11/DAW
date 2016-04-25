import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Team} from './team.service';

export class Player {

  constructor(
    public id: number,
    public name: string,
    public biography: string,
    public equipo: Team,
    public lastname: string,
    public position: string,
    public nacionality: string,
    public imagePlayer: string,
    public image: string,
    public age: number,
    public goals: number,
    public international: number,
    public dorsal: number,
    public video: string,
    ) {}

}

@Injectable()
export class PlayerService {

  private players = [
    new Player(1, 'Cristiano', 'Add a biography', new Team(1, 'Real Madrid', 'app/img/Shields/ShieldRealMadrid.png', 'app/img/Lineups/LineupRealMadrid.jpg', "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" "Zinedine Zidane", 'Add description', 'Add history',2), 'Ronaldo', 'Forward', 'app/img/Flags/Portugal.png', "app/img/Players/CristianoRonaldo.jpg","app/img/PlayersIndex/CristianoRonaldo.jpg", 31, 32, 90, 7, "app/Video/Cristiano.mp4"),
    new Player(2, 'Luka', 'Add a biography', new Team(1, 'Real Madrid', 'app/img/Shields/ShieldRealMadrid.png', 'app/img/Lineups/LineupRealMadrid.jpg', "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" "Zinedine Zidane", 'Add description', 'Add history',2), 'Modric', 'Midfield', 'app/img/Flags/Croatia.png', "app/img/Players/Modric.jpg","app/img/PlayersIndex/Modric.jpg", 30, 8, 50, 19, "app/Video/Modric.mp4"),
    new Player(3, 'Leo', 'Add a biography', new Team(2, 'Barcelona','app/img/Shields/ShieldBarcelona.png', 'app/img/Lineups/LineupBarcelona.jpg', "app/img/Equipments/EquipmentBarcelona.png", "app/img/Coaches/LuisEnrique.jpg", "Luis Enrique", 'Add description', "Add history",1), 'Messi', 'Forward', 'app/img/Flags/Argentina.png', "app/img/Players/LeoMessi.jpg","app/img/PlayersIndex/LeoMessi.jpg", 28, 29, 80, 10, "app/Video/Messi.mp4"),
    new Player(4, 'Alvaro', 'Add a biography', new Team(3, 'Valencia', 'app/img/Shields/ShieldValencia.png', 'app/img/Lineups/LineupValencia.jpg', "app/img/Equipments/EquipmentValencia.png", "app/img/Coaches/Ayestaran.jpg", "Pako Ayestaran", 'Add description', 'Add history',5), 'Negredo', 'Forward', 'app/img/Flags/Spain.png', "app/img/Players/Negredo.jpg","app/img/PlayersIndex/Negredo.jpg", 30, 12, 10, 7, "app/Video/Negredo.mp4"),
    new Player(5, 'Diego', 'Add a biography',  new Team(3, 'Valencia',), 'Alves', 'GoalKeeper', 'app/img/Flags/Spain.png', "app/img/Players/Negredo.jpg","app/img/PlayersIndex/Negredo.jpg", 30, 4),
    new Player(6, 'Keylor', 'Add a biography', new Team(1, 'Real Madrid',), 'Navas', 'GoalKeeper', 'app/img/Flags/Croatia.png', "app/img/Players/Modric.jpg","app/img/PlayersIndex/Modric.jpg", 29, 6),
    new Player(7, 'Claudio', 'Add a biography', new Team(2, 'Barcelona',), 'Bravo', 'GoalKeeper', 'app/img/Flags/Argentina.png', "app/img/Players/LeoMessi.jpg","app/img/PlayersIndex/LeoMessi.jpg", 33, 5),
    new Player(7, 'Jan', 'Add a biography', new Team(2, 'Barcelona',), 'Oblak', 'GoalKeeper', 'app/img/Flags/Argentina.png', "app/img/Players/LeoMessi.jpg","app/img/PlayersIndex/LeoMessi.jpg", 33, 5),
  ];

  getPlayers() {
    return withObserver(this.players);
  }

  getPlayer(id: number | string) {
    let player = this.players.filter(h => h.id === +id)[0]
    return withObserver(new Player(player.id, player.name, player.biography, player.equipo, player.lastname, player.position, player.nacionality, player.imagePlayer, player.image, player.age, player.goals, player.international, player.dorsal, player.video));
  }

  removePlayer(player: Player){
    for(let i=0; i<this.players.length; i++){
        if(this.players[i].id === player.id){
          this.players.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  savePlayer(player: Player){
    if(player.id){
      let oldPlayer = this.players.filter(h => h.id === player.id)[0];
      oldPlayer.name = player.name;
      oldPlayer.biography = player.biography;
      oldPlayer.equipo = player.equipo;
      oldPlayer.lastname = player.lastname;
      oldPlayer.position = player.position;
      oldPlayer.nacionality = player.nacionality;
      oldPlayer.imagePlayer = player.imagePlayer;
      oldPlayer.image = player.image;
      oldPlayer.age = player.age;
      oldPlayer.goals = player.goals;
      oldPlayer.international = player.international;
      oldPlayer.dorsal = player.dorsal;
      oldPlayer.video = player.video;
    } else {
      player.id = this.players.length+1;
      this.players.push(player);
    }
    return withObserver(player);
  }
}

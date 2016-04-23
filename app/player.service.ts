import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Team} from './team.service';

export class Player {

  constructor(
    public id: number,
    public name: string,
    public equipo: Team,
    public lastname: string,
    public position: string,
    public nacionality: string,
    public imagePlayer: string,
    public image: string,
    public age: number,
    ) {}

}

@Injectable()
export class PlayerService {

  private players = [
  	new Player(1, 'Cristiano', new Team(1, 'Real Madrid',), 'Ronaldo', 'Forward', 'app/img/Flags/Portugal.png', "app/img/Players/CristianoRonaldo.jpg","app/img/PlayersIndex/CristianoRonaldo.jpg", 31),
  	new Player(2, 'Leo', new Team(2, 'Barcelona',), 'Messi', 'Forward', 'app/img/Argentina.png', "app/img/Players/LeoMessi.jpg","app/img/PlayersIndex/LeoMessi.jpg", 28),
  	new Player(3, 'Alvaro', new Team(3, 'Valencia',), 'Negredo', 'Forward', 'app/img/Flags/Spain.png', "app/img/Players/Negredo.jpg","app/img/PlayersIndex/Negredo.jpg", 30),
  ];

  getPlayers() {
    return withObserver(this.players);
  }

  getPlayer(id: number | string) {
    let player = this.players.filter(h => h.id === +id)[0]
    return withObserver(new Player(player.id, player.name, player.equipo, player.lastname, player.position, player.nacionality, player.imagePlayer, player.age));
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
      oldPlayer.equipo = player.equipo;
      oldPlayer.lastname = player.lastname;
      oldPlayer.position = player.position;
      oldPlayer.nacionality = player.nacionality;
      oldPlayer.imagePlayer = player.imagePlayer;
      oldPlayer.age = player.age;
    } else {
      player.id = this.players.length+1;
      this.players.push(player);
    }
    return withObserver(player);
  }
}

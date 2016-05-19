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

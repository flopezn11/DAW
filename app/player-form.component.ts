import {Component, OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Player, PlayerService}   from './player.service';
import {Team, TeamService}   from './team.service';

@Component({
  selector: "player-form",
  templateUrl: "app/html/formJugador.component.html",
  styleUrls: ["app/css/formJugador.component.css"],
})
export class PlayerFormComponent {

  newPlayer: boolean;
  player: Player;
  teams: Team[];

  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: PlayerService,
    private teamservice: TeamService){

      let id = routeParams.get('id');
      if(id){
        service.getPlayer(id).subscribe(
          player => this.player = player,
          error => console.error(error)
        );
        this.newPlayer = false;
      } else {
        this.player = new Player(undefined,'', '');
        this.newPlayer = true;
      }
  }

  ngOnInit(){
      this.teamservice.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
    }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.savePlayer(this.player);
    window.history.back();
  }
}

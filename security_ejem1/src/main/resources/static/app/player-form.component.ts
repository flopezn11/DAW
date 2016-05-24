import {Component}  from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Player, PlayerService}   from './player.service';
import {Team, TeamService}   from './team.service';

@Component({
  selector: "player-form",
  directives: [ROUTER_DIRECTIVES],
  templateUrl: "app/html/formJugador.component.html",
  styleUrls: ["app/css/formJugador.component.css"],
})
export class PlayerFormComponent {

  newPlayer: boolean;
  player: Player;
  team: Team;
  active = true;
  ids:number;

  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: PlayerService,
    private teamservice: TeamService){

      let id = routeParams.get('id');
      let orden = routeParams.get('orden');
      this.ids = routeParams.get('orden');
      if(orden){
        service.getPlayer(id).subscribe(
          player => this.player = player,
          error => console.error(error)
        );
        this.newPlayer = false;
      } else {
        teamservice.getTeam(id).subscribe(
          team => this.team = team,
          error => console.error(error)
        );
        this.player = {};
        this.newPlayer = true;
      }
  }

  cancel() {
    window.history.back();
  }

save() {
		
	    if(this.ids){
	    this.service.updatePlayer(this.player).subscribe(
	    	player=> {}, 
	    	error => console.error('Error creating new ojo: '+error)
	    	
    	);
	    }else{
	    this.player.team = this.team;
	    this.service.savePlayers(this.player).subscribe(
	    	player => {}, 
	    	error => console.error('Error creating new aquiiii: '+error)
	    
	    	
    	);
    }
    window.history.back();
  }
  onSubmit() { this.submitted = true; }
}

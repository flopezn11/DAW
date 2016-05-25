import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Player, PlayerService} from './player.service';
import {Team, TeamService} from './team.service';
import {Login, LoginService} from './login.service';
import {Principal, PrincipalService} from './principal.service';

@Component({
  selector: 'principal',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/principal.component.html',
  styleUrls: ['app/css/principal.component.css']
})

export class PrincipalComponent {

  players: Player[];
  teams: Team[];
  principal: Principal;


  constructor(private teamService: TeamService, private loginService: LoginService, private playerService: PlayerService, private principalService: PrincipalService) {

  }

  ngOnInit(){
        this.playerService.getPlayers().subscribe(
          players => this.players = players,
          error => console.log(error)
        );
        this.teamService.getTeams().subscribe(
          teams => this.teams = teams,
          error => console.log(error)
        );
        this.principalService.getPrincipal(1).subscribe(
          principal => this.principal = principal,
          error => console.log(error)
        );

    }
    
    update(){
	    	principal => {}, 
	    	error => console.error('Error creating new book: '+error)
	    );
    }
}

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Player, PlayerService} from './player.service';
import {Team, TeamService} from './team.service';

@Component({
  selector: 'principal',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/principal.component.html',
  styleUrls: ['app/css/principal.component.css']
})

export class PrincipalComponent {

  players: Player[];
  idplayer1: number;
  idteam1: number;
  is: boolean;

  constructor(private teamService: TeamService, private playerService: PlayerService) {
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
        this.is = true;
        this.idplayer1 = 1;
        this.idteam1 = 1;

    }
}

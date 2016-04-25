import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Player, PlayerService} from './player.service';
import {Team, TeamService} from './team.service';
import {Login, LoginService} from './login.service';

@Component({
  selector: 'principal',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/principal.component.html',
  styleUrls: ['app/css/principal.component.css']
})

export class PrincipalComponent {

  players: Player[];
  idplayer1: number;
  idplayer2: number;
  idplayer3: number;
  idplayer4: number;
  idteam1: number;
  idteam2: number;
  idteam3: number;
  idteam4: number;
  idteamm1: number;
  idteamm2: number;
  idteamm3: number;
  idteamm4: number;


  constructor(private teamService: TeamService, private loginService: LoginService, private playerService: PlayerService) {
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
        this.idplayer1 = 1;
        this.idplayer2 = 2;
        this.idplayer3 = 3;
        this.idplayer4 = 4;
        this.idteam1 = 1;
        this.idteam2 = 2;
        this.idteam3 = 3;
        this.idteam4 = 4;
        this.idteamm1 = 1;
        this.idteamm2 = 2;
        this.idteamm3 = 3;
        this.idteamm4 = 1;

    }
}

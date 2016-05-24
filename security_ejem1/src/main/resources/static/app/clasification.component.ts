import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {Match, MatchService} from './match.service';
import {Login, LoginService} from './login.service';
import {Schedule, ScheduleService}   from './schedule.service';
import {Player, PlayerService}   from './player.service';
import {FirstFour} from "./firstfour";
import {OrderBy} from "./orderBy";


@Component({
	selector: 'clasification',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/clasification.component.html',
	styleUrls: ['app/css/clasification.component.css'],
	pipes: [FirstFour, OrderBy],
})
export class ClasificationComponent implements OnInit {
	teams: Team[];
	matches: Match[];
	schedules: Schedule[];
	journey: number;
	players: Player[];
	playerstop: Player[];
	goalkeepers: Player[];


  constructor(private router:Router, private teamService: TeamService, private playerService: PlayerService, private matchService: MatchService, private loginService: LoginService, private scheduleService: ScheduleService) {}

  ngOnInit(){
      this.teamService.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
			this.matchService.getMatches().subscribe(
			matches => this.matches = matches,
			error => console.log(error)
			);
			this.scheduleService.getSchedules().subscribe(
			schedules => this.schedules = schedules,
			error => console.log(error)
			);
			this.playerService.getPlayers().subscribe(
			players => this.players = players,
			error => console.log(error)
			);
			this.playerService.getPlayers().subscribe(
			players => this.playerstop = players,
			error => console.log(error)
			);
			this.playerService.getPlayers().subscribe(
			players => this.goalkeepers = players,
			error => console.log(error)
			);

			this.journey = 1;
    }

		editClasification(clasifid: number) {
        this.router.navigate(['ClasfEdit', { id: clasifid}]);
    }




}

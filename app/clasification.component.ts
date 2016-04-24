import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {Match, MatchService} from './match.service';
import {Login, LoginService} from './login.service';
import {Schedule, ScheduleService}   from './schedule.service';

@Component({
	selector: 'clasification',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/clasification.component.html',
	styleUrls: ['app/css/clasification.component.css'],
})
export class ClasificationComponent implements OnInit {
	teams: Team[];
	matches: Match[];
	schedules: Schedule[];
	journey: number;

  constructor(private router:Router, private service: TeamService, private matchService: MatchService, private loginService: LoginService, private scheduleService: ScheduleService) {}

  ngOnInit(){
      this.service.getTeams().subscribe(
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
			this.journey = 1;
    }




}

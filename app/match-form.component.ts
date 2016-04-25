import {Component, OnInit}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Match, MatchService}   from './match.service';
import {Schedule, ScheduleService}   from './schedule.service';
import {Team, TeamService}   from './team.service';

@Component({
  templateUrl: "app/html/match-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/match-form.component.css"],
})
export class MatchFormComponent {

  newMatch: boolean;
  match: Match;
  schedule: Schedule;
  teams: Team[];
  idlocal: number;
  idvisitor: number;
  teamlocal: Team;
  teamvisitor: Team;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: MatchService,
    private scheduleService: ScheduleService,
    private teamService: TeamService,
    ){

      let id = routeParams.get('id');
      let orden = routeParams.get('orden');
      if(orden){
        service.getMatch(id).subscribe(
          match => this.match = match,
          error => console.error(error)
        );
        this.newMatch = false;
      } else {
        scheduleService.getSchedule(id).subscribe(
          schedule => this.schedule = schedule,
          error => console.error(error)
        );
        this.match = new Match(undefined,'','');
        this.newMatch = true;
      }
  }

  ngOnInit(){
        this.teamService.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
        );
    }

  cancel() {
    window.history.back();
  }

  save() {
    this.teamService.getTeam(this.idlocal).subscribe(
    team => this.teamlocal = team,
    error => console.log(error)
    );
    this.teamService.getTeam(this.idvisitor).subscribe(
    team => this.teamvisitor = team,
    error => console.log(error)
    );
    this.match.local = this.teamlocal;
    this.match.visitor = this.teamvisitor;
    this.match.schedule = this.schedule;
    this.service.saveMatch(this.match);
    window.history.back();
  }
}

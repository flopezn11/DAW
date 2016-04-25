import {Component}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';


@Component({
  templateUrl: "app/html/clasification-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/match-form.component.css"],
})

export class ClasificationFormComponent {

  points: number;
  teamClasf: Team;
  team: Team;

  constructor(private _router:Router,  routeParams:RouteParams, private teamService: TeamService){
    let id = routeParams.get('id');
    teamService.getTeam(id).subscribe(
      team => this.team = team,
      error => console.error(error)
    );
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.team.points = this.points;
    this.teamService.saveTeam(this.team);
    window.history.back();
  }

}

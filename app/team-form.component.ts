import {Component}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';

@Component({
  templateUrl: "app/html/team-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/team-form.component.css"],
})
export class TeamFormComponent {

  newTeam: boolean;
  team: Team;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: TeamService){

      let id = routeParams.get('id');
      if(id){
        service.getTeam(id).subscribe(
          team => this.team = team,
          error => console.error(error)
        );
        this.newTeam = false;
      } else {
        this.team = new Team(undefined,'','');
        this.newTeam = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveTeam(this.team);
    window.history.back();
  }
}

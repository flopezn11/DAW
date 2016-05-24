import {Component}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {NgForm} from 'angular2/common';

@Component({
  templateUrl: "app/html/team-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/team-form.component.css"],
})
export class TeamFormComponent {

  newTeam: boolean;
  team: Team;
  active = true;
  ids: number;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: TeamService){

      let id = routeParams.get('id');
      this.ids = routeParams.get('id');
      if(id){
        service.getTeam(id).subscribe(
          team => this.team = team,
          error => console.error(error)
        );
        this.newTeam = false;
      } else {
        this.team = {fullname:'', imgescudo:'', imgequipo:'', imgequipment:'', imgcoach:'', coach:'', description:'', history:'', points:0};
        this.newTeam = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
	    if(this.ids){
	    	this.service.updateTeam(this.team).subscribe(
	    	team => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
	    }else{
    	console.log("vamos1");
    	this.service.saveTeam(this.team).subscribe(
	    	team => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
    	console.log("vamos2");
    }
    window.history.back();
  }

  onSubmit() { this.submitted = true; }
}

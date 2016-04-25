import {Component, OnInit}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';


@Component({
  templateUrl: "app/html/clasification-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/match-form.component.css"],
})

export class ClasificationFormComponent {

}

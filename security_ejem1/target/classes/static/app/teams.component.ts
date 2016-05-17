import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {Login,LoginService} from './login.service';

@Component({
  selector: 'teams',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/teams.component.html',
  styleUrls: ['app/css/teams.component.css']
})

export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private router:Router, private service: TeamService, private loginService: LoginService) {}

  ngOnInit(){
      this.service.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
    }

    newTeam() {
      this.router.navigate(['TeamNew']);
    }
}

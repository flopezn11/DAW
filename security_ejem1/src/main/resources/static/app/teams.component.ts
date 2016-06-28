import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {Login,LoginService} from './login.service';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  selector: 'teams',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/teams.component.html',
  styleUrls: ['app/css/teams.component.css'],
  providers: [HTTP_PROVIDERS]
})

export class TeamsComponent implements OnInit {
  teams: Team[];
  
  private description: string;
  private file: File;
  
  private images: String[] = [];

  constructor(private router:Router, private service: TeamService, private loginService: LoginService, private http: Http) {}

  ngOnInit(){
  	  this.loadImages();
      this.service.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
    }
    
    loadImages(){
		
		this.http.get("/images").subscribe(
			response => this.images = response.json();
		)		
	}

    newTeam() {
      this.router.navigate(['TeamNew']);
    }
}

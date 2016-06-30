import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';
import {Maatch, MaatchService} from './match.service';
import {Login, LoginService} from './login.service';
import {Schedule, ScheduleService}   from './schedule.service';
import {Player, PlayerService}   from './player.service';
import {FirstFour} from "./firstfour";
import {OrderBy} from "./orderBy";
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";
import {HTTP_PROVIDERS, Http} from 'angular2/http';


@Component({
	selector: 'clasification',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/clasification.component.html',
	styleUrls: ['app/css/clasification.component.css'],
	pipes: [FirstFour, OrderBy],
	providers: [HTTP_PROVIDERS]
})
export class ClasificationComponent implements OnInit {
	teams: Team[];
	matches: Maatch[];
	schedules: Schedule[];
	journey: number;
	players: Player[];
	playerstop: Player[];
	goalkeepers: Player[];
	
	private description: string;
  	private file: File;
  
  	private images: String[] = [];


  constructor(private router:Router, private teamService: TeamService, private playerService: PlayerService, private matchService: MaatchService, private loginService: LoginService, private scheduleService: ScheduleService, private http: Http) {}

  ngOnInit(){
  	  this.loadImages();
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

	loadImages(){
		
		this.http.get("/images").subscribe(
			response => this.images = response.json();
		)		
	}



}

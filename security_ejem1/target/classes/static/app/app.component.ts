import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';
import {ClasificationComponent} from './clasification.component';
import {ClasificationFormComponent} from './clasification-form.component';
import {TeamsComponent} from './teams.component';
import {NewsComponent} from './news.component';
import {JugadorComponent} from './jugador.component';
import {PrincipalComponent} from './principal.component';
import {Team, TeamService} from './team.service';
import {TeamDetailComponent} from './team-detail.component';
import {TeamFormComponent} from './team-form.component';
import {PlayerDetailComponent} from './player-detail.component';
import {Player, PlayerService} from './player.service';
import {PlayerFormComponent} from './player-form.component';
import {Schedule, ScheduleService} from './schedule.service';
import {ScheduleDetailComponent} from './schedule-detail.component';
import {Match, MatchService} from './match.service';
import {MatchFormComponent} from './match-form.component';
import {News, NewsService} from './news.service';
import {NewsDetailComponent} from './news-detail.component';
import {NewsFormComponent} from './news-form.component';
import {OrderBy} from "./orderBy";
import {Principal, PrincipalService} from './principal.service';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";

import {BookService} from './book.service';
import {LoginService} from './login.service';

import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'app/html/app.component.html',
  providers:  [TeamService, PlayerService, ScheduleService, MatchService, NewsService, PrincipalService, BookService, LoginService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [OrderBy],
})
@RouteConfig([
  {path: '/books', name: 'Books', component: BookListComponent},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
  {path:'/home', name: 'Principal', component: PrincipalComponent, useAsDefault: true},
  {path:'/clasification', name: 'Clasification', component: ClasificationComponent},
	{path:'/clasification/edit/:id', name: 'ClasfEdit', component: ClasificationFormComponent},
	{path:'/teams', name: 'Teams', component: TeamsComponent},
	{path:'/jugador', name: 'Jugador', component: JugadorComponent},
	{path: '/team/:id', name: 'TeamDetail', component: TeamDetailComponent},
	{path: '/team/new', name: 'TeamNew', component: TeamFormComponent},
	{path: '/team/edit/:id', name: 'TeamEdit', component: TeamFormComponent},
	{path: '/player/:id', name: 'PlayerDetail', component: PlayerDetailComponent},
	{path: '/player/new', name: 'PlayerNew', component: PlayerFormComponent},
	{path: '/player/edit/:id', name: 'PlayerEdit', component: PlayerFormComponent},
	{path: '/schedule/:id', name: 'ScheduleDetail', component: ScheduleDetailComponent},
	{path: '/match/new', name: 'MatchNew', component: MatchFormComponent},
	{path: '/match/edit/:id', name: 'MatchEdit', component: MatchFormComponent},
  {path:'/news', name: 'News', component: NewsComponent},
  {path: '/news/:id', name: 'NewsDetail', component: NewsDetailComponent},
	{path: '/news/new', name: 'NewsNew', component: NewsFormComponent},
	{path: '/news/edit/:id', name: 'NewsEdit', component: NewsFormComponent},
])
export class AppComponent implements OnInit {	
	teams: Team[];
	schedules: Schedule[];
  	news: News[];
  	
  	private description: string;
  	private file: File;
  
  	private images: String[] = [];

		constructor (private router:Router, private service: TeamService, private loginService: LoginService, private scheduleService: ScheduleService, private newsService: NewsService, private http: Http){}

		ngOnInit(){
		this.loadImages();
			this.service.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
			this.scheduleService.getSchedules().subscribe(
        schedules => this.schedules = schedules,
        error => console.log(error)
      );
      this.newsService.getNews().subscribe(
				news => this.news = news,
				error => console.log(error)
			);
		}

		logIn(event: any, user: string, pass: string){
	  
		  event.preventDefault();
		  
		  this.loginService.logIn(user, pass).subscribe(
		      user => console.log(user),
		      error => alert("Invalid user or password")
	      );
  		}
  
	  	logOut(){
		this.loginService.logOut().subscribe(
			response => {}, 
			error => console.log("Error when trying to log out: "+error)
		);
  }
  
  loadImages(){
		
		this.http.get("/images").subscribe(
			response => this.images = response.json();
		)		
	}
}

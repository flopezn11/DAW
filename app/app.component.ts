import {Component, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ClasificationComponent} from './clasification.component';
import {ClasificationFormComponent} from './clasification-form.component';
import {TeamsComponent} from './teams.component';
import {NewsComponent} from './news.component';
import {JugadorComponent} from './jugador.component';
import {PrincipalComponent} from './principal.component';
import {Login,LoginService} from './login.service';
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


@Component({
	selector: 'app',
	templateUrl: 'app/html/app.component.html',
	providers: [LoginService, TeamService, PlayerService, ScheduleService, MatchService, NewsService, PrincipalService],
  directives: [ROUTER_DIRECTIVES],
	pipes: [OrderBy],
	changeDetection: ChangeDetectionStrategy.Default,
})

@RouteConfig([
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
	login: Login[];

		constructor (private router:Router, private service: TeamService, private loginService: LoginService, private scheduleService: ScheduleService, private newsService: NewsService){}

		ngOnInit(){
			this.loginService.getLog().subscribe(
				login => this.login = login,
				error => console.log(error)
			);
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

		logIn() {
			this.loginService.logIn(this.login);
			if(this.loginService.isLogged == false) {
				window.alert("El usuario o la contraseña introducidos no son correctos.");
			}
		}

		logFuera() {
			this.loginService.logFuera();
		}

}

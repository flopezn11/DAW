import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ClasificationComponent} from './clasification.component';
import {TeamsComponent} from './teams.component';
import {NewsComponent} from './news.component';
import {Schedule1Component} from './schedule1.component';
import {Schedule2Component} from './schedule2.component';
import {JugadorComponent} from './jugador.component';
import {PrincipalComponent} from './principal.component';
import {FormJugadorComponent} from './formJugador.component';
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


@Component({
	selector: 'app',
	templateUrl: 'app/html/app.component.html',
	providers: [LoginService, TeamService, PlayerService, ScheduleService, MatchService, NewsService],
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path:'/home', name: 'Principal', component: PrincipalComponent, useAsDefault: true},
  {path:'/clasification', name: 'Clasification', component: ClasificationComponent},
	{path:'/teams', name: 'Teams', component: TeamsComponent},
	{path:'/schedule1', name: 'Schedule1', component: Schedule1Component},
	{path:'/schedule2', name: 'Schedule2', component: Schedule2Component},
	{path:'/jugador', name: 'Jugador', component: JugadorComponent},
	{path:'/formJugador', name: 'FormJugador', component: FormJugadorComponent},
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
		}

		logFuera() {
			this.loginService.logFuera();
		}

}

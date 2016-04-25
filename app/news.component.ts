import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {News, NewsService}   from './news.service';
import {Login,LoginService} from './login.service';

@Component({
  selector: 'news',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/news.component.html',
  styleUrls: ['app/css/news.component.css']
})

export class NewsComponent implements OnInit {
  news: News[];

  constructor(private router:Router, private newsService: NewsService, private loginService: LoginService) {}

  ngOnInit(){
      this.newsService.getNews().subscribe(
        news => this.news = news,
        error => console.log(error)
      );
    }

    newNews() {
      this.router.navigate(['NewsNew']);
    }
}
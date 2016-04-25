import {Component}  from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {News, NewsService}   from './news.service';

@Component({
  templateUrl: "app/html/news-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/news-form.component.css"],
})
export class NewsFormComponent {

  newNews: boolean;
  news: News;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private newsService: NewsService){

      let id = routeParams.get('id');
      if(id){
        newsService.getNew(id).subscribe(
          news => this.news = news,
          error => console.error(error)
        );
        this.newNews = false;
      } else {
        this.news = new News(undefined,'','');
        this.newNews = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.newsService.saveNews(this.news);
    window.history.back();
  }
}
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
  ids: number;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private newsService: NewsService){

      let id = routeParams.get('id');
      this.ids = routeParams.get('id');
      if(id){
        newsService.getNew(id).subscribe(
          news => this.news = news,
          error => console.error(error)
        );
        this.newNews = false;
      } else {
        this.news = {};
        this.newNews = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
	    if(this.ids){
	    	this.newsService.updateNews(this.news).subscribe(
	    	news => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
	    }else{
    	this.newsService.saveNews(this.news).subscribe(
	    	news => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
    }
    window.history.back();
  }
  onSubmit() { this.submitted = true; }
}
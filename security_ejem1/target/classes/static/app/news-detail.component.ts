import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {News, NewsService}   from './news.service';
import {Login,LoginService} from './login.service';

@Component({
    templateUrl: 'app/html/new.component.html',
    styleUrls: ['app/css/new.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class NewsDetailComponent {

    news: News;

    constructor(private router: Router, routeParams: RouteParams, private newsService: NewsService, private loginService: LoginService) {
        let id = routeParams.get('id');
        newsService.getNew(id).subscribe(
            news => this.news = news,
            error => console.error(error)
        );
    }

    removeNews() {
        let okResponse = window.confirm("Do you want to remove this news?");
        if (okResponse) {
            this.newsService.removeNews(this.news).subscribe(
                _ => this.router.navigate(['News']),
                error => console.error(error)
            )
        }
    }

    newNews() {
      this.router.navigate(['NewsNew', {id: this.news.id}]);
    }

    editNews() {
        this.router.navigate(['NewsEdit', { id: this.news.id}]);
    }
}
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface News {  

	 id?: number,
    title: string,
    subtitle: string,
    author: string,
    description: string,
    imgnews: string,
}

const URL = 'news/';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  getNews() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getNew(id: number | string) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  saveNews(book: News) {

    let body = JSON.stringify(book);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeNews(book: News) {	  
	  
	let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + book.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateNews(book: News) {

    let body = JSON.stringify(book);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + book.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}

import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Team} from './team.service';


export interface Player {

    id?: number,
    name: string,
    biography: string,
    equipo: Team,
    lastname: string,
    position: string,
    nacionality: string,
    imagePlayer: string,
    image: string,
    age: number,
    goals: number,
    international: number,
    dorsal: number,
    video: string,

}

const URL = 'players/';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  getPlayers() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getPlayer(id: number | string) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  savePlayers(book: Player) {

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

  removePlayer(book: Player) {	  
	  
	let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + book.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updatePlayer(book: Player) {

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

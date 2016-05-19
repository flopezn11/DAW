import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Team {
    id?: number;
    fullname: string;
    imgescudo: string;
    imgequipo: string;
    imgequipment: string;
    imgcoach: string;
    coach: string;
    description: string;
    history: string;
    points: number;
}

const URL = 'teams/';

@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  getTeams() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getTeam(id: number | string) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  saveTeam(team: Team) {

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

  removeTeam(team: Team) {	  
	  
	let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + team.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateTeam(team: Team) {

    let body = JSON.stringify(book);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + team.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
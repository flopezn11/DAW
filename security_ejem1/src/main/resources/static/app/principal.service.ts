import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Principal {

    idplayer1: number;
    idplayer2: number;
    idplayer3: number;
    idplayer4: number;
    idteam1: number;
    idteam2: number;
    idteam3: number;
    idteam4: number;
    idteamm1: number;
    idteamm2: number;
    idteamm3: number;
    idteamm4: number;

}

const URL = 'principal/';

@Injectable()
export class PrincipalService {

  constructor(private http: Http) { }

  getPrincipal() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}

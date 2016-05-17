import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Principal {

  constructor(
    public idplayer1: number;
    public idplayer2: number;
    public idplayer3: number;
    public idplayer4: number;
    public idteam1: number;
    public idteam2: number;
    public idteam3: number;
    public idteam4: number;
    public idteamm1: number;
    public idteamm2: number;
    public idteamm3: number;
    public idteamm4: number;
    ) {}

}

@Injectable()
export class PrincipalService {

  private principal = new Principal(1, 2, 3, 4, 1, 1, 2, 3, 1, 2, 3, 3);

  getPrincipal() {
    return withObserver(this.principal);
  }
}

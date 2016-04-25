import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Schedule} from './schedule.service';
import {Team} from './team.service';

export class Match {

  constructor(
    public id: number,
    public date: string,
    public schedule: Schedule,
    public local: Team,
    public visitor: Team,
    public resultLocal: number,
    public resultVisitor: number,
    ) {}

}

@Injectable()
export class MatchService {

  private matchs = [
  ];

  getMatches() {
    return withObserver(this.matchs);
  }

  getMatch(id: number | string) {
    let match = this.matchs.filter(h => h.id === +id)[0]
    return withObserver(new Match(match.id, match.date, match.schedule, match.local, match.visitor, match.resultLocal, match.resultVisitor));
  }

  removeMatch(match: Match){
    for(let i=0; i<this.matchs.length; i++){
        if(this.matchs[i].id === match.id){
          this.matchs.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveMatch(match: Match){
    if(match.id){
      let oldMatch = this.matchs.filter(h => h.id === match.id)[0];
      oldMatch.fecha = match.fecha;
      oldMatch.schedule = match.schedule;
      oldMatch.local = match.local;
      oldMatch.visitor = match.visitor;
      oldMatch.resultLocal = match.resultLocal;
      oldMatch.resultVisitor = match.resultVisitor
    } else {
      match.id = this.matchs.length+1;
      this.matchs.push(match);
    }
    return withObserver(match);
  }
}

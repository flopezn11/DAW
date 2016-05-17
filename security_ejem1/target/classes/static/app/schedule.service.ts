import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Schedule {

  constructor(
    public id: number,
    ) {}

}

@Injectable()
export class ScheduleService {

  private schedules = [
  	new Schedule(1),
  	new Schedule(2),
  ];

  getSchedules() {
    return withObserver(this.schedules);
  }

  getSchedule(id: number | string) {
    let schedule = this.schedules.filter(h => h.id === +id)[0]
    return withObserver(new Schedule(schedule.id));
  }

  removeSchedule(schedule: Schedule){
    for(let i=0; i<this.schedules.length; i++){
        if(this.schedules[i].id === schedule.id){
          this.schedules.splice(i,1);
          for (i; i<this.schedules.length; i++){
            this.schedules[i].id = this.schedules[i].id - 1;
          }
          break;
        }
    }
    return withObserver(undefined);
  }

  saveSchedule(schedule: Schedule){
    if(schedule.id){
      let oldSchedule = this.schedules.filter(h => h.id === schedule.id)[0];
    } else {
      schedule.id = this.schedules.length+1;
      this.schedules.push(schedule);
    }
    return withObserver(schedule);
  }
}

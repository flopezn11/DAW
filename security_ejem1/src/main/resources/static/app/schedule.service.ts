import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Schedule {

    id: number;

}

const URL = 'schedules/';

@Injectable()
export class ScheduleService {

  constructor(private http: Http) { }

  getSchedules() {
  	return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getSchedule(id: number | string) {
  	return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  removeSchedule(schedule: Schedule){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + schedule.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveSchedule(schedule: Schedule){
    let body = JSON.stringify(schedule);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateSchedule(schedule: Schedule) {

    let body = JSON.stringify(schedule);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + schedule.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}

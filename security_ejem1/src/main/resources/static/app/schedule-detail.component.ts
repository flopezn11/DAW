import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Schedule, ScheduleService}   from './schedule.service';
import {Login, LoginService} from './login.service';
import {Maatch, MaatchService} from './match.service';

@Component({
    templateUrl: 'app/html/schedule.component.html',
    styleUrls: ['app/css/schedule.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class ScheduleDetailComponent {

    schedule: Schedule;
    schedules: Schedule[];
    schedulenew: Schedule;
    matches: Maatch[];
    ids: number;

    constructor(private router: Router, routeParams: RouteParams, private service: ScheduleService, private loginService: LoginService, private matchService: MaatchService) {
        let id = routeParams.get('id');
        this.ids = routeParams.get('id');
        service.getSchedule(id).subscribe(
            schedule => this.schedule = schedule,
            error => console.error(error)
        );
        this.schedulenew = {};
    }

    ngOnInit(){
          this.service.getSchedules().subscribe(
          schedules => this.schedules = schedules,
          error => console.log(error)
          );
          this.matchService.getMatches().subscribe(
          matches => this.matches = matches,
          error => console.log(error)
          );
      }

    removeSchedule() {
        let okResponse = window.confirm("Do you want to remove this schedule?");
        if (okResponse) {
          if !(this.schedule.id === 1){
            this.service.removeSchedule(this.schedule).subscribe(
                _ => this.router.navigate(['ScheduleDetail', { id: 1}]),
                error => console.error(error)
            )
          }else {
            window.alert("La jornada 1 no se puede borrar");
          }
        }
    }

    removeMatch(matchRemove: Maatch) {
        let okResponse = window.confirm("Do you want to remove this match?");
        if (okResponse) {
            this.matchService.removeMatch(matchRemove).subscribe(
                _ => this.router.navigate(['ScheduleDetail', {id: this.schedule.id}]),
                error => console.error(error)
            )
        }
    }

    gotoSchedule(schedulefor: Schedule) {
        this.router.navigate(['ScheduleDetail', { id: schedulefor.id }]);
    }

    save() {
	    if(this.ids){
	    	this.service.saveSchedule(this.schedulenew).subscribe(
	    	schedulenew => {}, 
	    	error => console.error('Error creating new aquiiii: '+error)
	    	
    	);
	    }else{
	    	this.service.updateSchedule(this.schedulenew).subscribe(
	    	schedulenew => {}, 
	    	error => console.error('Error creating new ojo: '+error)
    	);
    	}
    	if (this.ids == 1){
    		this.router.navigate(['ScheduleDetail', { id: 2 }]);
    	}else{
    		this.router.navigate(['ScheduleDetail', { id: 1 }]);
    	}
  	}
  onSubmit() { this.submitted = true; }

    newMatch() {
      this.router.navigate(['MatchNew', {id: this.schedule.id}]);
    }

    editMatch(matchid: number) {
        this.router.navigate(['MatchEdit', { id: matchid, orden: matchid}]);
    }
}

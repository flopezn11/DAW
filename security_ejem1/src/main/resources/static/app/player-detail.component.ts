import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Player, PlayerService}   from './player.service';
import {Login,LoginService} from './login.service';

@Component({
    templateUrl: 'app/html/jugador.component.html',
    styleUrls: ['app/css/jugador.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class PlayerDetailComponent {

    player: Player;

    constructor(private router: Router, routeParams: RouteParams, private service: PlayerService, private loginService: LoginService) {
        let id = routeParams.get('id');
        service.getPlayer(id).subscribe(
            player => this.player = player,
            error => console.error(error)
        );
    }

    removePlayer() {
        let okResponse = window.confirm("Do you want to remove this team?");
        if (okResponse) {
            this.service.removePlayer(this.player).subscribe(
                _ => this.router.navigate(['TeamDetail', {id: this.player.equipo.id}]),
                error => console.error(error)
            )
        }
    }

    editPlayer() {
        this.router.navigate(['PlayerEdit', { id: this.player.id, orden: this.player.id}]);
    }
}

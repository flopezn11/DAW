import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Team {

  constructor(
    public id: number,
    public fullname: string,
    public imgescudo: string,
    public imgequipo: string,
    public imgequipment: string,
    public imgcoach: string,
    public coach: string,
    public description: string,
    public history: string,
    public points: number,
    ) {}

}

@Injectable()
export class TeamService {

  private teams = [
  	new Team(1, 'Real Madrid', 'app/img/Shields/ShieldRealMadrid.png', 'app/img/Lineups/LineupRealMadrid.jpg', "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" "Zinedine Zidane", 'Add description', 'Add history',2),
  	new Team(2, 'Barcelona','app/img/Shields/ShieldBarcelona.png', 'app/img/Lineups/LineupBarcelona.jpg', "app/img/Equipments/EquipmentBarcelona.png", "app/img/Coaches/LuisEnrique.jpg", "Luis Enrique", 'Add description', "Add history",1),
  	new Team(3, 'Valencia', 'app/img/Shields/ShieldValencia.png', 'app/img/Lineups/LineupValencia.jpg', "app/img/Equipments/EquipmentValencia.png", "app/img/Coaches/Ayestaran.jpg", "Pako Ayestaran", 'Add description', 'Add history',5),
  ];

  getTeams() {
    return withObserver(this.teams);
  }

  getTeam(id: number | string) {
    let team = this.teams.filter(h => h.id === +id)[0]
    return withObserver(new Team(team.id, team.fullname, team.imgescudo, team.imgequipo, team.imgequipment, team.imgcoach, team.coach, team.description, team.history));
  }

  removeTeam(team: Team){
    for(let i=0; i<this.teams.length; i++){
        if(this.teams[i].id === team.id){
          this.teams.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveTeam(team: Team){
    if(team.id){
      let oldTeam = this.teams.filter(h => h.id === team.id)[0];
      oldTeam.fullname = team.fullname;
      oldTeam.imgescudo = team.imgescudo;
      oldTeam.imgequipo = team.imgequipo;
      oldTeam.imgequipment = team.imgequipment;
      oldTeam.imgcoach = team.imgcoach;
      oldTeam.coach = team.coach;
      oldTeam.description = team.description;
      oldTeam.history = team.history;
      oldTeam.points = team.points;
    } else {
      team.id = this.teams.length+1;
      this.teams.push(team);
    }
    return withObserver(team);
  }
}

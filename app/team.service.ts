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
  	new Team(1, 'Real Madrid', 'app/img/Shields/ShieldRealMadrid.png', 'app/img/Lineups/LineupRealMadrid.jpg', "app/img/Equipments/EquipmentRealMadrid.png", "app/img/Coaches/Zidane.jpg" "Zinedine Zidane", 'El New York City es un club de fútbol de Estados Unidos de la ciudad de New York, en Nueva York. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.', 'Historia',2),
  	new Team(2, 'Barcelona','app/img/Shields/ShieldBarcelona.png', 'app/img/Lineups/LineupBarcelona.jpg', "app/img/Equipments/EquipmentBarcelona.png", "app/img/Coaches/LuisEnrique.jpg", "Luis Enrique", 'El Montreal es un club de fútbol de Canadá de la ciudad de Montreal, en Quebec. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.', "Toward the end of 2007, much speculation had been made about a possible franchise move for the lower division Impact to Major League Soccer. The construction of the expandable Saputo Stadium further suggested an interest on the part of the group to move up to the top level North American league. Although Toronto FC held a three-year Canadian exclusivity deal that did not expire until 2009, they stated in March 2008 that they would gladly welcome the Impact into MLS.[2] Chairman Joey Saputo held talks with George Gillett (former co-owner of Liverpool F.C. and former owner of the Montreal Canadiens) regarding possible joint ownership of a franchise.[3] On July 24, 2008, MLS announced they were seeking to add two expansion teams for the 2011 season, of which Montreal was listed as a potential candidate.[4] On November 22, 2008, the group's bid for an MLS franchise was not retained by commissioner Don Garber. In response to Vancouver's successful bid in March 2009, Impact GM Nick De Santis commented that he expected chairman Saputo to pursue and ultimately realize his vision of Montreal as an MLS franchise someday.[5] By May 16, 2009, the Montreal Gazette reported Garber and Saputo had resumed talks for an expansion team to begin play in 2011.[6] On May 7, 2010, Garber and Saputo officially announced Montreal as the nineteenth club in Major League Soccer, set to begin play for the 2012 season.[7] The MLS franchise is privately owned by the Saputo family.[8] On June 14, 2011, the Montreal Impact announced a five-year agreement with the Bank of Montreal to become their lead sponsor and jersey sponsor in MLS.[9] On March 10, 2012, the Impact played their first-ever MLS game, a 2-0 loss against Vancouver Whitecaps FC.[10] A week later, the team made its home debut at the Olympic Stadium, playing to a 1-1 tie with Chicago Fire; the match attracted 58,912 spectators, surpassing the previous record for professional soccer in Montreal established in a 1981 Montreal Manic home game (58,542).[11] On May 12, 2012, the Impact played in front of a crowd of 60,860 spectators during a game against the Los Angeles Galaxy, establishing a record attendance for a professional soccer match in Canada.[12] In the 2012 regular season, Montreal had finished in seventh in the Eastern Conference with a record of 12 wins, 16 losses, and 6 ties. On February 23, 2013, Montreal won the 2013 Walt Disney World Pro Soccer Classic, beating Columbus Crew 1-0 in the final during their pre season campaign. Montreal Impact also have won the 2013 Canadian Championship on May 29, being their first major trophy as an expansion team in MLS, second in the club's existence.[13] This victory also gave the Impact its 8th Voyageurs Cup.[citation needed] In the 2013 MLS season, they had finished the regular season with a record of 14 wins, 13 losses, and 7 ties. Montreal Impact earned their first ever berth in the playoffs by clinching fifth seed in the Eastern conference. During the playoffs, Montreal were eliminated by the Houston Dynamo in the knockout round. By being champions of the 2013 Canadian Championship, Montreal earned their first ever berth as MLS expansion team for the 2014-15 CONCACAF Champions League. In 2014, The Impact became repeated champions of the Voyageurs Cup by beating Toronto FC in the 2014 Canadian Championship final on June 4, 2014.[citation needed]. In the 2014 MLS season, Montreal Impact finished their season with a 6-18-10 (W-L-D) record being the worst team in MLS that season, being last in both Eastern conference and overall in the league. With the chances of appearing in the playoffs gone and still competing in the 2014-15 edition of the CCL, Montreal Impact had placed their focus in the regional tournament, consequently winning their group, advancing in the knockout stage.",1),
  	new Team(3, 'Valencia', 'app/img/Shields/ShieldValencia.png', 'app/img/Lineups/LineupValencia.jpg', "app/img/Equipments/EquipmentValencia.png", "app/img/Coaches/Ayestaran.jpg", "Pako Ayestaran", 'El Columbus Crew es un club de fútbol de Estados Unidos de la ciudad de Columbus, en Columbia. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.', 'Historia',5),
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
    } else {
      team.id = this.teams.length+1;
      this.teams.push(team);
    }
    return withObserver(team);
  }
}

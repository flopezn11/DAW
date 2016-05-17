import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class News {

  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public author: string,
    public description: string,
    public imgnews: string,
    ) {}

}

@Injectable()
export class NewsService {

  private news = [
  	new News(1, 'Paul Pogba signs for Real Madrid', 'Juventus announces that accepts the offer from Real Madrid for Paul Pogba. Juventus receives 80 million dollars in exchange for the player', 'Álvaro Parras Gomez', 'The french player Paul Pogba has signed a 5-year contract with Real Madrid. Juventus gets 80 million in exchange for the player. The player said in a Spanish television: "I will live a dream I had since childhood". Paul Labile Pogba (born 15 March 1993) is a French professional footballer who plays for France National Team. He operates primarily as a central midfielder and is comfortable at playing both in attack and defence. In Italy, he gained the nicknames Il Polpo Paul ("Paul the Octopus") for his long legs that look like tentacles during tackling or running and "Pogboom" for his explosive style and energy on the pitch. He received the Golden Boy award for 2013, given to the best under-21 player in Europe, followed by the Bravo Award in 2014, awarded to the best under-23 player who has participated in European competitions.', 'app/img/Players/PogbaNewsReal.jpeg'),
  	new News(2, 'Radamel Falcao signs for Valencia CF','Monaco announces that accepts the offer from Valencia CF for Radamel Falcao. Monaco receives 50 million dollars in exchange for the player', 'Fernando Lopez Nieto', 'The colombian player Radamel Falcao has signed a 3-year contract with Valencia CF. Monaco gets 50 million in exchange for the player. The player said in a Spanish television: "I will live a dream I had since childhood". Radamel Falcao García Zárate (born 10 February 1986), also known as Radamel Falcao, or simply Falcao, is a Colombian professional footballer who plays as a striker and captain of the Colombia national team. He is sometimes nicknamed El Tigre or King of the Europa League.', 'app/img/Players/FalcaoNewsValencia.png'),
  ];

  getNews() {
    return withObserver(this.news);
  }

  getNew(id: number | string) {
    let news = this.news.filter(h => h.id === +id)[0]
    return withObserver(new News(news.id, news.title, news.subtitle, news.author,news.description, news.imgnews));
  }

  removeNews(news: News){
    for(let i=0; i<this.news.length; i++){
        if(this.news[i].id === news.id){
          this.news.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveNews(news: News){
    if(news.id){
      let oldNews = this.news.filter(h => h.id === news.id)[0];
      oldNews.title = news.title;
      oldNews.subtitle = news.subtitle;
      oldNews.author = news.author;
      oldNews.description = news.description;
      oldNews.imgnews = news.imgnews;
    } else {
      news.id = this.news.length+1;
      this.news.push(news);
    }
    return withObserver(news);
  }
}
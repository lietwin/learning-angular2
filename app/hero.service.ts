import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
    //Getting heroes from HTTP
    constructor(private http: Http){}
    private _heroesUrl = 'http://localhost:3000/heroes-data.json'; //URL to web API

    getHeroes(){
       return this.http.get(this._heroesUrl)
        .map(res => <Hero[]> res.json().data )
        .do(data => console.log(data)) // eyeball results in the console
        .catch(this.handleError);
      }
      private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
      }

    getHero(id:number){
      return Promise.resolve(HEROES)
        .then(heroes => heroes.filter(hero => hero.id === id));
    }
}

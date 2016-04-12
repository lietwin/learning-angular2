import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    //Getting heroes from HTTP
    constructor(private http: Http){}
    private _heroesUrl = 'http://localhost:3000/heroes-data.json'; //URL to web API

    getHeroes(){
       return this.http.get(this._heroesUrl)
        .map(res => <Hero[]> res.json().heroes)
        .do(data => console.log(data)) // dev only to check data
        .catch(this.handleError);
      }
      private handleError (error: Response) {
        // for production, deactivate or send to a logging interface
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
      }

    getHero(id:number){
      return this.http.get(this._heroesUrl)
        .map(res => <Hero> res.json().heroes.filter(hero => hero.id === id))
        .do(data => console.log(data)) // dev only to check data
        .catch(this.handleError);
      // or convert an observable into a promise
        /*.toPromise()
        .then(res => <Hero> res.json().heroes.filter(hero => hero.id === id));*/
    }

    addHero(name: string){

    }
}

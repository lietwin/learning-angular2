import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
@Input() hero: Hero;
errorMessage: any;
constructor(
  private _heroService: HeroService,
  private _routeParams: RouteParams
){}
ngOnInit (){
  // + a js operator that turns string into number
  let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .subscribe(
        hero => this.hero = hero[0],
        error => this.errorMessage = error
      );
}

goBack() {
  window.history.back();
}

};

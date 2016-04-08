import {Component} from 'angular2/core';
import {Router} from 'angular2/Router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent {
  title: 'My dashboard';
  heroes: Hero[];

  constructor(
    private _heroService: HeroService,
    private _router: Router
  ){}

  ngOnInit(){
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this._router.navigate(link);
}
}

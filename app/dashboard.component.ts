import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import { Http } from 'angular2/http';

import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent {
  title: 'My dashboard';
  heroes: Hero[];
  errorMessage: any;
  constructor(
    private _heroService: HeroService,
    private _router: Router
  ){}

  ngOnInit() { this._heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
              // error => this.errorMessage = <any> error);
  }

  gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this._router.navigate(link);
}
}

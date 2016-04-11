import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  title = 'My heroes';
  selectedHero: Hero;
  heroes: Hero[];
  errorMessage: any;

  constructor(private _heroService: HeroService, private _router: Router) { }
  ngOnInit() { this.getHeroes(); }

  getHeroes() {
  this._heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
              // error => this.errorMessage = <any> error);
  }


  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this._router.navigate(link);
  }
}

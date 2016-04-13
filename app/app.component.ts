import { Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {provide}           from 'angular2/core';
//import {XHRBackend}        from 'angular2/http';
// in-memory web api imports
//import {InMemoryBackendService, SEED_DATA }   from 'a2-in-memory-web-api/core';
//import {HeroesData}          from './heroes-data';
import { HeroesComponent} from './heroes.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroService} from './hero.service';

import {DashboardComponent} from './dashboard.component';

@Component ({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink] = "['Dashboard']"> Dashboard </a>
      <a [routerLink] = "['Heroes']"> Heroes </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  //declaring the providers: router and http and custom services
  providers: [
     ROUTER_PROVIDERS,
     HTTP_PROVIDERS,
     HeroService
     // in-memory web api providers
    // ,provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    // provide(SEED_DATA,  { useClass: HeroesData }) // in-mem server data
   ]
})

@RouteConfig([
  { path: '/heroes', name : 'Heroes', component: HeroesComponent},
  { path: '/dashboard', name : 'Dashboard', component: DashboardComponent,
    useAsDefault: true},
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  title = 'Tour of Heroes';
}

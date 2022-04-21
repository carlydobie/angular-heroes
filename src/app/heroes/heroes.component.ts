//ng generate component heroes

//HeroesComponent class file

import { Component, OnInit } from '@angular/core';
//Hero interface
import { Hero } from '../hero';
//import mock heroes
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

//decorator function that specifies the Angular 
//metadata for the component
@Component({
  //The component's CSS element selector
  selector: 'app-heroes',
  //The location of the component's template file
  templateUrl: './heroes.component.html',
  //The location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']
})
//Always export the component so you can import it elsewhere
export class HeroesComponent implements OnInit {

  //define a component property called heroes to
  //expose the HEROES array for binding
  //heroes = HEROES;

  //declaration
  heroes: Hero[] = [];


  //defines a private heroService property and
  //idnetifiesit as a HeroService injection site
  //When Angular creates a HeroesComponent, the 
  //Dependency injection system sets the herService
  //parameter to the singleton instance of
  //HeroService
  //Reserve the constructor for minimal
  //initialization such as wiring constructor
  //parameters to properties. The constructor
  //shouldn't do anything. It certainly shouldn't
  //call a function that makes HTTP request to a
  //remote server as a real data service would
  constructor(private heroService: HeroService) { }

  //lifecycle hook
  ngOnInit(): void {
    this.getHeroes();
  }

  //method to retrieve the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  //selectedHero?: Hero;

  /*onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: 
  Selected hero id=${hero.id}`)
  }*/
}

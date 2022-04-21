//can get hero data from anywhere--a web service,
//local storage, or mock data source

//removing data access from components means you
//can change your mind about the implementation
//anytime, without touching any components

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
//import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

//dependency injection system
//accepts metadata object for the sevice the same way
//the @Component() decorator did for your 
//component classes
//When you provide the service at the root level,
//Angular creates a single, shared instance of 
//HeroService and injects into any class that asks
//for it
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    //The backtick characters define a Javascript template
    //literal for embedding the id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

//service-inservice scenario: you inject the 
//MessageService into the HeroService which is 
//injected into the HeroesComponent
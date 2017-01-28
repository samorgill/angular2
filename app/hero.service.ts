/**
 * Created by ssorg on 28/01/2017.
 */

import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      //Simulating server latency with 2 seconds
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }
}

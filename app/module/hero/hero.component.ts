import { Component, OnInit } from '@angular/core'

import { HeroService } from '../../service/hero/HeroService'
import { Hero } from '../../entity/Hero'

@Component({
    selector: 'hero-list',
    templateUrl: './app/module/hero/hero.html',
    styleUrls: ['./app/module/hero/hero.css']
    
})

export class HeroComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    selected(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
}
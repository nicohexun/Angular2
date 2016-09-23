import { Component, Input } from '@angular/core'

import {Hero} from '../../entity/Hero'

@Component({
    selector: 'hero-detail',
    templateUrl: './app/module/hero/hero-detail.html',
    styleUrls:[ './app/module/hero/hero-detail.css']
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
 }
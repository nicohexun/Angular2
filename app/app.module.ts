import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent }  from './module/hero/hero.component';
import { HeroDetailComponent }  from './module/hero/hero-detail.component';
import { HeroService }  from './service/hero/HeroService';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroComponent,HeroDetailComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
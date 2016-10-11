import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent }  from './module/hero/hero.component';
import { DashboardComponent }  from './module/hero/dashboard.component';
import { HeroDetailComponent }  from './module/hero/hero-detail.component';
import { HeroService }  from './service/hero/HeroService';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
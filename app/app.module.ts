import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './module/hero/hero.component';
import { HeroSearchComponent } from './module/hero/hero-search.component';
import { DashboardComponent } from './module/hero/dashboard.component';
import { HeroDetailComponent } from './module/hero/hero-detail.component';
import { HeroService } from './service/hero/HeroService';
import { HeroSearchService } from './service/hero/HeroSearchService';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), routing],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
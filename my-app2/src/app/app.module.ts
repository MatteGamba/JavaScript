import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MioCompComponent } from './mio-comp/mio-comp.component';
import { HeroComponent } from './hero/hero.component';
import { HerosComponent } from './heros/heros.component';
import { HeroNgClassComponent } from './hero-ng-class/hero-ng-class.component';
import { PipesProvaComponent } from './pipes-prova/pipes-prova.component';

@NgModule({
  declarations: [
    AppComponent,
    MioCompComponent,
    HeroComponent,
    HerosComponent,
    HeroNgClassComponent,
    PipesProvaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

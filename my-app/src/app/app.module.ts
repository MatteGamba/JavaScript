import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoCompComponent } from './primo-comp/primo-comp.component';
import { SecondoCompComponent } from './secondo-comp/secondo-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoCompComponent,
    SecondoCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

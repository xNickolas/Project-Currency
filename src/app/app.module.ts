import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';
import { EuroComponent } from './euro/euro.component';
import { LibraComponent } from './libra/libra.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavBarComponent,
    DollarComponent,
    EuroComponent,
    LibraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

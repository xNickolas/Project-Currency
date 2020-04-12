import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';
import { ConversionService } from './conversion.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavBarComponent,
    DollarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

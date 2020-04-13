import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';
import { ConversionService } from './conversion.service';
import {HttpClientModule} from '@angular/common/http';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavBarComponent,
    DollarComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    jqxChartModule,
    ChartsModule,
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

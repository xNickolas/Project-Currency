import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';
import { LineChartComponent } from './line-chart/line-chart.component';


const routes: Routes = [
  {path:'nav-bar', component:NavBarComponent},
  {path:'dollar', component:DollarComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:'line-chart', component:LineChartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

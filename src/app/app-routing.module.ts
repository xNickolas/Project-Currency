import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';


const routes: Routes = [
  {path:'calculator', component:CalculatorComponent},
  {path:'nav-bar', component:NavBarComponent},
  {path:'dollar', component:DollarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

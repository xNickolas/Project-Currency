import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DollarComponent } from './dollar/dollar.component';
import { EuroComponent } from './euro/euro.component';
import { LibraComponent } from './libra/libra.component';


const routes: Routes = [
  {path:'nav-bar', component:NavBarComponent},
  {path:'dollar', component:DollarComponent},
  {path:'euro', component:EuroComponent},
  {path:'libra', component:LibraComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

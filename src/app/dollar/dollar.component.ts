import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.css']
})
export class DollarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueDollar: number = 5.243199;
  realResult: number;
  dollarResult: number;


  converseReal(event){
    let result = event.target.value;
    this.realResult = Number(result);
    this.realResult = this.realResult / this.valueDollar;
    console.log(this.realResult);
  }

  converseDollar(event){
    let result = event.target.value;
    this.dollarResult = Number(result);
    this.dollarResult = this.dollarResult * this.valueDollar;
    console.log(this.dollarResult);
  }

}

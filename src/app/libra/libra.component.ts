import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valuePound: number = 6.35;
  realResult: number;
  poundResult: number;


  converseReal(event){
    let result = event.target.value;
    this.realResult = Number(result);
    this.realResult = this.realResult / this.valuePound;
    console.log(this.realResult);
  }

  conversePound(event){
    let result = event.target.value;
    this.poundResult = Number(result);
    this.poundResult = this.poundResult * this.valuePound;
    console.log(this.poundResult);
  }


}

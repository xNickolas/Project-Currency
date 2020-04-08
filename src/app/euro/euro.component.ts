import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueEuro: number = 5.56;
  realResult: number;
  euroResult: number;


  converseReal(event){
    let result = event.target.value;
    this.realResult = Number(result);
    this.realResult = this.realResult / this.valueEuro;
    console.log(this.realResult);
  }

  converseEuro(event){
    let result = event.target.value;
    this.euroResult = Number(result);
    this.euroResult = this.euroResult * this.valueEuro;
    console.log(this.euroResult);
  }

}

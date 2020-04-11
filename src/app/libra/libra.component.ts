import { Component, OnInit } from '@angular/core';
import { ConversionService } from './../conversion.service';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

  constructor(private moneyApi:ConversionService) { }

  moneys:any;
  rates:any;
  entries:any;

  ngOnInit(): void {
    this.callApi()
  }

  callApi() {
    let moneydata;
    this.moneyApi.getData().subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); // Object.entries(moneydata.rates);
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates);
      }
    );
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

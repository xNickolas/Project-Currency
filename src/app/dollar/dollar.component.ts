import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../model/conversion.service';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.css']
})
export class DollarComponent implements OnInit {

  constructor(private moneyApi:ConversionService) { }

  moneys:any;
  rates:any;
  entries:any;



  ngOnInit(): void {
    this.callApi()
  }

  callApi() {
    let moneydata;
    this.moneyApi.getData("BRL").subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); // Object.entries(moneydata.rates);
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates);
      }
    );
  }

  valueDollar: number = 5.24;
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





  

  

  

//   valuePound: number = 6.35;
//   realResult: number;
//   poundResult: number;


//   converseReal(event){
//     let result = event.target.value;
//     this.realResult = Number(result);

//     this.realResult = this.realResult / this.valuePound;
//     console.log(this.realResult);
//   }

//   conversePound(event){
//     let result = event.target.value;
//     this.poundResult = Number(result);
//     this.poundResult = this.poundResult * this.valuePound;
//     console.log(this.poundResult);
//   }


// }

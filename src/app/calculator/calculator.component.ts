import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../model/conversion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Currency } from '../model/currency';
import { currencyOption } from '../model/currencyOption'
import { Calc } from '../model/calc';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calc:any;
  moneyBase:any;
  moneyTwo:any;


  // numResult:number;
  // numResultTwo:number; 
  // currentRate = 5.19;
  // convertionRate:number;
  // formdata;


  constructor(private service: ConversionService) {
    // this.moneyOne = "USD";
    // this.moneyTwo = "RS";
    // this.numResult;
    // this.numResultTwo = 1;
    this.calc =  new Calc (null , 0);
    this.moneyTwo = new Currency("BRL", 20); 
    this.moneyBase = new currencyOption("USD");

  }

  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    this.callCalculator();
    this.changeCurrentRate();
    this.setRateByApi();
    // let moneydata;
    // // TODO: fazer com que parametro do getData seja dinamico conforme opção selecionada no select 
    // this.service.getData("BRL").subscribe(
    //   (data) => {
    //     moneydata = new Object(data);
    //     this.entries = Object.entries(moneydata.rates); // Object.entries(moneydata.rates);
    //     this.moneys = Object.keys(moneydata.rates);
    //     this.rates = Object.values(moneydata.rates); 
    //   console.log(`moneydata (array keys dos dados da api.rates): ${this.rates}`)
    //   }
    // );

    
    // this.formdata = new FormGroup({
      
    //   valOne: new FormControl("", Validators.compose([
    //     Validators.required,
    //   ])),
    //   valTwo: new FormControl("", Validators.compose([
    //     Validators.required,
        
    //   ])),
    // });

  }

  callCalculator() {
    let moneydata;
    this.service.getData(this.moneyBase.money_name).subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); 
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates); 
        if(this.calc.inputValueOne == null || this.calc.inputValueOne == " ") {
          this.calc.inputValueOne = 1;
          let index = Object.keys(moneydata.rates).indexOf("BRL")
          console.log(`index é igual a ${index}`)
          this.moneyTwo.rate = this.rates[index]
          this.calc.inputValueTwo = this.calc.inputValueOne * this.moneyTwo.rate
          this.calc.inputValueTwo = this.calc.inputValueTwo.toFixed(2)
        }
      // console.log(`moneydata (array keys dos dados da api.rates): ${this.rates}`)
      }
    );
  }


  
  dolarRateToReal: any;
  euroRateToReal: any;
  setRateByApi() {
    let moneydata;
    this.service.getData(this.moneyBase.money_name).subscribe(
      (data) => {
        moneydata = new Object(data);
        let dolarIndex = Object.keys(moneydata.rates).indexOf('USD');
        let euroIndex = Object.keys(moneydata.rates).indexOf('EUR');
        this.dolarRateToReal = Object.values(moneydata.rates)[dolarIndex];
        this.euroRateToReal = Object.values(moneydata.rates)[euroIndex];
      }
    );
  }




  calcOne(event){
    this.changeCurrentRate();
    this.calc.inputValueTwo = this.calc.inputValueOne * this.moneyTwo.rate; 
    this.calc.inputValueTwo = this.calc.inputValueTwo.toFixed(2)
  }

  calcTwo(event){
    // let result = event.target.value;
    // this.numResultTwo = Number(result);
    // this.numResultTwo /= this.currentRate; 
  }

  
  
  changemoneyOne(event) {
   
    // this.moneyOne = event.target.value
    // let index = this.moneys.indexOf('BRL');
    // this.currentRate = this.rates[index];
    this.callCalculator()
    this.changeCurrentRate();
  }

  changemoneyTwo(event) {
    
    this.changeCurrentRate()
  }

  changeCurrentRate() {
    let index = this.moneys.indexOf(this.moneyTwo.money_name);
    this.moneyTwo.rate = this.rates[index];
  }

  // valueDollar: number = 5.24;
  // realResult: number;
  // dollarResult: number;


  // converseReal(event){
  //   let result = event.target.value;
  //   this.realResult = Number(result);
  //   this.realResult = this.realResult / this.valueDollar;
  //   console.log(this.realResult);
  // }

  // converseDollar(event){
  //   let result = event.target.value;
  //   this.dollarResult = Number(result);
  //   this.dollarResult = this.dollarResult * this.valueDollar;
  //   console.log(this.dollarResult);
  // }


}

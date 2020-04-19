import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../model/conversion.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Currency } from '../model/currency';
import { currencyOption } from '../model/currencyOption'
import { Calc } from '../model/calc';
import { ComunicationService } from '../comunication.service'


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calc:any;
  moneyBase:any;
  moneyTwo:any;
  libraRate:any;
  dolarRate:any;
  euroRate:any;

  constructor(private service: ConversionService, private linkComponents:ComunicationService) {
    this.calc =  new Calc (null , 0);
    this.moneyTwo = new Currency("BRL", 20); 
    this.moneyBase = new currencyOption("USD");

  }

  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    this.callCalculator();
    this.setEuroAndDolarToRealRateByApi();
    // this.changeCurrentRate();
    
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
         
        } else{
          let index = Object.keys(moneydata.rates).indexOf(this.moneyTwo.money_name)
          console.log(`index é igual a ${index}`)
          this.moneyTwo.rate = this.rates[index]
          
        }

          this.calc.inputValueTwo = this.calc.inputValueOne * this.moneyTwo.rate
          this.calc.inputValueTwo = this.calc.inputValueTwo.toFixed(2)
      // console.log(`moneydata (array keys dos dados da api.rates): ${this.rates}`)
      }
    );
  }

  setEuroAndDolarToRealRateByApi() {
    let moneydata;
    this.service.getData("BRL").subscribe(
      (data) => {
        moneydata = new Object(data);
        console.log(moneydata);
        let dolarIndex = Object.keys(moneydata.rates).indexOf('USD');
        let libraIndex = Object.keys(moneydata.rates).indexOf('GBP');
        let euroIndex = Object.keys(moneydata.rates).indexOf('EUR');

        this.dolarRate = Object.values(moneydata.rates)[dolarIndex];
        this.libraRate = Object.values(moneydata.rates)[libraIndex];
        this.euroRate = Object.values(moneydata.rates)[euroIndex];
        
        this.dolarRate = 1/this.dolarRate;
        this.libraRate = 1/this.libraRate;
        this.euroRate = 1/this.euroRate;

        this.dolarRate = this.dolarRate.toFixed(2);
        this.libraRate = this.libraRate.toFixed(2);
        this.euroRate = this.euroRate.toFixed(2);
        
        // Important
        this.linkComponents.broadcastMoneyRate(this.euroRate, this.dolarRate, this.libraRate);
      }
    );
  }


  calcOne(event){
    this.changeCurrentRate();
    this.calc.inputValueTwo = this.calc.inputValueOne * this.moneyTwo.rate; 
    this.calc.inputValueTwo = this.calc.inputValueTwo.toFixed(2)
  }

  calcTwo(event){
    this.changeCurrentRate();
    this.calc.inputValueOne = this.calc.inputValueTwo / this.moneyTwo.rate; 
    this.calc.inputValueOne = this.calc.inputValueOne.toFixed(2)
    
  }

  changemoneyOne(event) {
    this.callCalculator()
    this.changeCurrentRate();
  }

  changemoneyTwo(event) {
    this.callCalculator()
    this.changeCurrentRate()
  }

  changeCurrentRate() {
    let index = this.moneys.indexOf(this.moneyTwo.money_name);
    this.moneyTwo.rate = this.rates[index];
  }
}

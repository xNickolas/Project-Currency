import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numResult:number;
  numResultTwo:number; 
  currentRate = 5.24;
  convertionRate:number;
  moneyOne:string;
  moneyTwo:string;
  formdata;


  constructor(private service: ConversionService) {
    this.moneyOne = "USD";
    this.moneyTwo = "RS";
    this.numResult;
    this.numResultTwo;

  }

  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    this.callCalculator();
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

    
    this.formdata = new FormGroup({
      
      valOne: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      valTwo: new FormControl("", Validators.compose([
        Validators.required,
        
      ])),
    });

  }

  callCalculator() {
    let moneydata;
    this.service.getData("BRL").subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); 
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates); 
      console.log(`moneydata (array keys dos dados da api.rates): ${this.rates}`)
      }
    );
  }



  calcOne(event){
    let result = event.target.value;
    this.numResult = Number(result);
    this.numResult *= this.currentRate;
  }

  calcTwo(event){
    let result = event.target.value;
    this.numResultTwo = Number(result);
    this.numResultTwo /= this.currentRate; 
  }

  
  
  changemoneyOne(event) {
   
    this.moneyOne = event.target.value
    let index = this.moneys.indexOf('BRL');
    this.currentRate = this.rates[index];
  }

  changemoneyTwo(event) {
    this.moneyTwo = event.target.value
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

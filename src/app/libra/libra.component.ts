import { Component, OnInit } from '@angular/core';
import { ConversionService } from './../conversion.service'; // Importando o serviço que faz a chamada para Api para dentro deste componente 

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

  constructor(private moneyApi:ConversionService) { } // Variável moneyApi do tipo ConversionService (nome da classe dentro do serviço que faz a chamada da Api )

  moneys:any; // será setada como uma array de string com os nomes das moedas
  rates:any; // será setada como uma array de numbers com os valores das taxas de conversão 
  entries:any; // será setada como uma estrutura de dados / objeto com chave e valor(dicionário)

  ngOnInit(): void {
    this.callApi() // chamada da função (ocorre ao iniciar o componente)
  }

  callApi() { // função 
    let moneydata; // variável escopo da função
    this.moneyApi.getData("BRL").subscribe( // chama -se a função getData definida no serviço conversion-service
      (data) => {           // subscribe: "escuta" de maneira assíncrona resposta da Api 
        moneydata = new Object(data); // data: objeto retornado pela Api 
        this.entries = Object.entries(moneydata.rates); // chaves e valores do objeto da Api
        this.moneys = Object.keys(moneydata.rates); // chaves dos objetos da Api
        this.rates = Object.values(moneydata.rates); // valores dos objetos da Api 
      }
    );
  }
  
  valuePound: number = 6.35; // setado com valor fixo TODO: tirar valor fixo inicial
  realResult: number;
  poundResult: number;


  converseReal(event){
    let result = event.target.value; // pega valor do imput
    this.realResult = Number(result); // usa o construtor Number que transforma string para number
    // TODO: usar valuePound com o valor adquirido na Api
    let index = this.moneys.indexOf("CAD");
    console.log(this.rates[index]);
    this.valuePound = this.rates[index];
    this.realResult = this.realResult / this.valuePound; // faz a conversão dos valores das moedas
    console.log(this.realResult); // exibe o resultado no console do inspect
  }

  conversePound(event){ // usa event binding 
    let result = event.target.value;
    this.poundResult = Number(result);
    this.poundResult = this.poundResult * this.valuePound;
    console.log(this.poundResult);
  }

  // TODO: talvez nao precise ser criada aqui apenas no componente Currency
  // changeCurrentRate(selectedOptionTwo) {
  //   let index = this.moneys.indexOf(selectedOptionTwo);
  //   this.valuePound = this.rates[index];
  // }


}

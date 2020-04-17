import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private apiUrl = "https://api.exchangeratesapi.io/latest";
  // private historicalMoney = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD/";

  base ='?base=';

  constructor(private http: HttpClient) { }

  getData(moneyBase){
    let finalurl = this.apiUrl + this.base + moneyBase;
    return this.http.get(finalurl)
  }

  // gethistoricalData( /*  TODO: criar parametros da função */) { 
  //   // TODO: criar conteudo da função 
  //  }

}

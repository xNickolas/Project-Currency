import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private apiUrl = "https://api.exchangeratesapi.io/latest";

  base ='?base=';

  constructor(private http: HttpClient) { }

  getData(moneyBase){
    let finalurl = this.apiUrl + this.base + moneyBase;
    return this.http.get(finalurl)
  }

}

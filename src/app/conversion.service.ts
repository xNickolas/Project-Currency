import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private apiUrl = "https://api.exchangeratesapi.io/latest";

  base ='?base=GBP';
  private finalurl = this.apiUrl + this.base;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.finalurl)
  }

}

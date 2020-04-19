import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  broadcastEuroRate = new EventEmitter<number>()
  broadcastDolarRate = new EventEmitter<number>()
  broadcastLibraRate = new EventEmitter<number>()

  constructor() { }
  broadcastMoneyRate(moneyeuro:number,moneydolar:number,moneylibra:number){
    this.broadcastEuroRate.emit(moneyeuro)
    this.broadcastDolarRate.emit(moneydolar)
    this.broadcastLibraRate.emit(moneylibra)

  }
}

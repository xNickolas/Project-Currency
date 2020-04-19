import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  euroRate:any;
  dolarRate:any;
  libraRate:any;

  constructor(private linkComponent:ComunicationService) { }

  ngOnInit(): void {
    this.linkComponent.broadcastEuroRate.subscribe(
      rateEUR => {
        this.euroRate = rateEUR;
        console.log(this.euroRate)
      }
    );

    this.linkComponent.broadcastDolarRate.subscribe(
      rateUSD => {
        this.dolarRate = rateUSD;
      }
    );

    this.linkComponent.broadcastLibraRate.subscribe(
      rateGBP => {
        this.libraRate = rateGBP;
      }
    );
  }

}

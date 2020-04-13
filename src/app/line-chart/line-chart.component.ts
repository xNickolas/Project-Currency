import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 90], label: 'Currencies price history' },
  ];
  
  source: any = 
  {
    datatype: "csv",
    datafields: [
            { name: 'Date' },
    ],
    url: 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01 HTTP/1.1'
  }

  lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];


	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
  }
  
  overrides = {
    legend: {
      labels: { fontColor: 'white' }
    },
  };

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  constructor() { }

  ngOnInit(): void {
  }

}

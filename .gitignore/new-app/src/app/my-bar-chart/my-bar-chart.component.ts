import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Assessment-1', 'Assessment-2', 'Assessment-3', 'Assessment-4', 'Assessment-5', 'Assessment-6', 'Assessment-7'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public firstVal:number;
  myFunc(event){
    this.firstVal=event.name;
  }
  public barChartData = [
    {data: [this.firstVal, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  ngOnInit() {
  }
}
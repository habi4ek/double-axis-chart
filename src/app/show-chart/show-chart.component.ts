import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit {


  view: any[];
  colorScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#01579b', '#7aa3e5', '#a8385d', '#00bfa5'
    ]
  };
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'date';
  yAxisLabel = 'price';
  yAxisLabel2 = 'count';
  autoScale = true;
  timeLine = true;
  animations = false;
  tooltipDisabled = false;

  // data for charts
  multi = [{
    name: 'first',
    series: [{
      name: new Date('2018-01-01T00:00:00'),
      value: '100'
    }, {
      name: new Date('2018-02-01T00:00:00'),
      value: '200'
    }, {
      name: new Date('2018-03-01T00:00:00'),
      value: '150'
    }, {
      name: new Date('2018-04-01T00:00:00'),
      value: '50'
    }, {
      name: new Date('2018-05-01T00:00:00'),
      value: '100'
    }]
  }, {
    name: 'second',
    secondAxis: true,
    series: [{
      name: new Date('2018-01-01T00:00:00'),
      value: '5'
    }, {
      name: new Date('2018-02-01T00:00:00'),
      value: '4'
    }, {
      name: new Date('2018-03-01T00:00:00'),
      value: '1'
    }, {
      name: new Date('2018-04-01T00:00:00'),
      value: '3'
    }, {
      name: new Date('2018-05-01T00:00:00'),
      value: '2'
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

  onSelect(e) {
    console.log('Select point:', e);
  }
}

import { Component, Input, OnChanges, AfterViewInit, ViewChild } from '@angular/core';

import { BubblesChart } from './bubbles.chart';

@Component({
  selector: 'bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnChanges, AfterViewInit {

  @Input() values: number[];
  @ViewChild('target') target;
  chart: BubblesChart;

  constructor() { }
  
  ngOnChanges(changes) {
    if (this.chart) {
      this.chart.render(changes.values);
    }
  }

  ngAfterViewInit() {
    this.chart = new BubblesChart(this.target.nativeElement);
    this.chart.render(this.values);
  }

}

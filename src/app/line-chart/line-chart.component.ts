import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @ViewChild('chart')
  private chartContainer: ElementRef;

  @Input()
  public data: Array<any>;

  private margin: any = { top: 20, bottom: 20, left: 40, right: 20 };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.removeChart();
    this.createChart();
  }

  private removeChart() {
    const element = this.chartContainer.nativeElement;
    d3.select(element).select('svg').remove();
  }

  private createChart() {
    const element = this.chartContainer.nativeElement;
    const width = +element.offsetWidth - this.margin.left - this.margin.right;
    const height = +element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    const g = svg.append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const parseTime = d3.timeParse('%x');

    const x = d3.scaleTime()
      .rangeRound([0, width]);

    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    const line = d3.line()
      .x(function (d) { return x(d.date); })
      .y(function (d) { return y(d.close); });


    const datum = this.data.map(function (d) {
      const date = { date: new Date(d.time * 1000) };
      return Object.assign(d, date);
    });

    // define X & Y domains
    const xDomain = this.data.map(d => new Date(d.time * 1000));
    const yDomain = [0, d3.max(this.data, d => d.close)];

    x.domain(d3.extent(xDomain));
    y.domain(d3.extent(yDomain));

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Price');

    g.append('path')
      .datum(datum)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line);

  }

}

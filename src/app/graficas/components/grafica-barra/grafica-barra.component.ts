import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() indexAxis: "x" | "y" = 'x';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    // this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   Math.round(Math.random() * 100),
    //   56,
    //   Math.round(Math.random() * 100),
    //   40];

    this.barChartData.datasets.map(bar => {
      bar.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    })

    this.chart?.update();
  }

  constructor() {
    console.log(this.indexAxis);

  }

  ngOnInit(): void {

    this.barChartData.datasets.map(value => {
      if (value.indexAxis) {
        value.indexAxis = this.indexAxis;
      }

    })

  }

}

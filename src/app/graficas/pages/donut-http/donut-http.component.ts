import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [

  ]
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public dataSetsData: number[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {

        const labels = Object.keys(data);
        const values = Object.values(data);

        labels.forEach(element => {
          this.doughnutChartLabels.push(element)
        });

        this.doughnutChartData.datasets.push(
          { data: values, backgroundColor: ['#00D8ED', '#00A0F7', '#0B5DE0', '#01F0DB'], hoverBackgroundColor: '#4C00ED' }
        );

      })
  }

}

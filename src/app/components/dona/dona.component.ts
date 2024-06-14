import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

/*   @Input() title = ''
  @Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') dataDonut: number[] = []; */

/*   charOptions = {
    resposive: true,
    maintainAspectRatio: false
  }; */

  constructor() {
    // Valores por defecto en caso no se setee nada desde otros componentes
   /*  this.dataDonut = [350, 450, 100];
    this.doughnutChartLabels = ['Labels1', 'Labels2', 'Labels3'];
    */
  }


  ngOnInit(): void {
    // Aca seteamos los valores que vienen como @Input() al objeto doughnutChartData
  /*   this.doughnutChartData.datasets[0].data = this.dataDonut;
    this.doughnutChartData.labels = this.doughnutChartLabels; */
  }

 // public doughnutChartData: ChartData<'doughnut'> = {
   /*  labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataDonut,
      },
    ] */
//  };

}


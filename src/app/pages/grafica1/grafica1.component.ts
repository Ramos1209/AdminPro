import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component  {

 
   public labels1: string []=['Pan', 'refresco','teste']
   public data1 =[
    [10,45,32],
   ];
}

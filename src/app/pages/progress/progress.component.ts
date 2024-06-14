import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {

progreso1: number =15

get getProgreso1() {
  return `${this.progreso1}%`;
}

resultadoCambio(valor: number){
  console.log('Hey hou lest gooo', valor)
}

}

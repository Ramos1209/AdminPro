import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

 @Input('valor') progreso: number = 40;

 @Output() mostrarValorSaida:EventEmitter<number> = new EventEmitter();

  mostrarValor( valor: number ){
/* 
    if (this.progreso >= 100 && valor >= 0) {
      return this.progreso = 100;
    }
    if (this.progreso <= 100 && valor < 0) {
      return this.progreso = 0;
    } */

    this.progreso = this.progreso + valor;
    this.mostrarValorSaida.emit(this.progreso);
  }
  onChange(valor: number){
    if(valor >=100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.mostrarValorSaida.emit(this.progreso);
  }

}

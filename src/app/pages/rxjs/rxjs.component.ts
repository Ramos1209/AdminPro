import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'

})
export class RxjsComponent {

  constructor() {


    const $obs = new Observable(observer => {

      let i = -1;
    const intervalo =  setInterval(() => {
        i++;

        observer.next(i);

        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
      /*   if(i === 2){
          observer.error('i chegou a 2')
        } */

      }, 1000);

    });

    $obs.subscribe(valor =>console.log('SUBS', valor),
                   error => console.warn('Error', error),
                   () => console.info('Obs terminado') );
  }

}

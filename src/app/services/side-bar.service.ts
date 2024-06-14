import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any[]=[
    {
      titulo:'Principal',
      icone: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main',url:''},
        { titulo: 'promesas',url:'promesas'},
        { titulo: 'rxjs',url:'rxjs'},
        { titulo: 'ProgressBar',url:'progress'},
        { titulo: 'Gráfica',url:'grafica1'},
      ]
    }
  ]
  constructor() { }
}

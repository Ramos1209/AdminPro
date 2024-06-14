import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public subTitulo$: Subscription;

  constructor(private router: Router) {
   this.subTitulo$ = this.argumentosDeRotas().subscribe(({title})=> {
                                             this.titulo = title ;
                                             document.title = `Admin-Pro ${title}`;
    });
    
   
  }
  ngOnDestroy(): void {
   this.subTitulo$.unsubscribe();
  }

  argumentosDeRotas(){
   return this.router.events.pipe( filter((event): event is ActivationEnd => event instanceof ActivationEnd),
    filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data),)


  }
}


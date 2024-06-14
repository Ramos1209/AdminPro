import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']

})
export class PromesasComponent implements OnInit {

  constructor(){}


  ngOnInit(): void {
   
   const promise = new Promise((resolve, reject)=>{
    
    if(false){
      resolve("Hello world")
    }
    else{
      reject("Minha promesa falhou");
    }

   });

   promise.then((mensagem)=>{
    console.log(mensagem)
   })
   .catch( error =>console.log('Error em minha promesa' + error));

   console.log('Fim de Promesa')

  }
  
}

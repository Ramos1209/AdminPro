import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acconting-setting',
  templateUrl: './acconting-setting.component.html',
  styles: [
  ]
})
export class AccontingSettingComponent implements OnInit{
  public  linkTheme = document.querySelector('#theme')

  ngOnInit() {
    this.checkCurrenThema()
    
  }



  changeColor(theme: string){
   
   const url =`./assets/css/colors/${theme}.css`;
   this.linkTheme?.setAttribute('href',url);

   localStorage.setItem('theme', url)
   this.checkCurrenThema();

  }
  checkCurrenThema(): void{
    const links = document.querySelectorAll('.selector')
   
    links.forEach(elem =>{
      elem.classList.remove('working');
      const btnThema = elem.getAttribute('data-theme');
      const btnThemaUrl = `./assets/css/colors/${btnThema}.css`;
      const currentThema = this.linkTheme?.getAttribute('href');

     if(btnThemaUrl === currentThema){
      elem.classList.add('working');
     }

    })
  }
}

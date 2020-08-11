import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public selectorTema = document.querySelector('#theme');


  constructor(
    
  ) { 
    const url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.selectorTema.setAttribute('href', url);
    console.log(this.selectorTema)
  }

  cambioTema(tema:string){

    const url=` ./assets/css/colors/${tema}.css`;

   this.selectorTema.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    links.forEach(elem=>{
      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = ` ./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.selectorTema.getAttribute('href');

      if(btnThemeUrl === currenTheme){
        elem.classList.add('working');
      }

    })
  }
}

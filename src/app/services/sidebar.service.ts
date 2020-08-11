import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

menu:any[] = [
  {
    titulo:"Dashboard",
    icono:"mdi mdi-gauge",
    subMenu:[
      {titulo:"Principal", url:"/"},
      {titulo:"Progreso", url:"progress"},
      {titulo:"Grafica", url:"grafica1"},
      {titulo:"Ajustes del  tema", url:"account-settings"},
      {titulo:"Promesas", url:"promesas"}
  ]
  }
]

  constructor() { }
}

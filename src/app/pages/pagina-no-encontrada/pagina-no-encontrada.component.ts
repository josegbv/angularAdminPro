import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.components.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}

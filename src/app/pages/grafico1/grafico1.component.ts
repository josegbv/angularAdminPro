import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styles: []
})
export class Grafico1Component implements OnInit {

  public Labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
   [35, 100, 200], ];
  

  constructor() { }

  ngOnInit() {
  }

}

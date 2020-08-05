import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() titulo="SIN NADA";
  
    

  // Doughnut
    @Input() Labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    @Input() data = [
   [350, 450, 100], ];

public colors:Color[] = [{backgroundColor:['#6857E6','#009FEE', '#F02059']}]

  constructor() { }

  ngOnInit() {
  }

}

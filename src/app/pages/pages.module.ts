import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ChartsModule } from 'ng2-charts';






@NgModule({
  declarations: [
    
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    ChartsModule
    
    
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    PagesComponent,
    
  ]
})
export class PagesModule { }

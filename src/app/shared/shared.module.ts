import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

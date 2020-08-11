import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';



const routes: Routes = [
    {path:'dashboard', component:PagesComponent,
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Dashboard'} },
      {path:'progress', component:ProgressComponent, data:{titulo:'Progreso'}},
      {path:'grafica1', component:Grafico1Component, data:{titulo:'Grafica #1'}},
      {path:'account-settings', component:AccountSettingsComponent, data:{titulo:'Ajustes del tema'}},
      {path:'promesas', component:PromesasComponent},
    ]    
},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}

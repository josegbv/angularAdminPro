import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';
import { Grafico1Component } from './pages/grafico1/grafico1.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path:'', component:PagesComponent,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'progress', component:ProgressComponent},
      {path:'grafica1', component:Grafico1Component},
      {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]    
},
  
  
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
   
  
  {path:'**', component:PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

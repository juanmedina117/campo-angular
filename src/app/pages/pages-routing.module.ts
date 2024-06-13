import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { FormulrioComponent } from './formulrio/formulrio.component';

const routes: Routes = [
  {
    path:'registro',
    component:RegistroComponent,
    children:[
      {
        path:'formulario',
        component: FormulrioComponent
      },
      {
        path:'puntos',
        component: FormulrioComponent
      },
      {
        path:'foto',
        component: FormulrioComponent
      },
      {
        path:'',
        redirectTo:'formulario',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'registro/formulario'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

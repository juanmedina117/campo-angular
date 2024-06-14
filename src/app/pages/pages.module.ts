import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
import { PagesRoutingModule } from './pages-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { PrimeModule } from '../prime/prime.module';
import { FormulrioComponent } from './formulrio/formulrio.component';
import { PuntosComponent } from './puntos/puntos.component';
import { FotoComponent } from './foto/foto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    FormulrioComponent,
    PuntosComponent,
    FotoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

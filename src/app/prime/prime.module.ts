import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    StepsModule,
    ToastModule,
    FloatLabelModule,
    ButtonModule,
    PanelModule
  ],
  exports:[
    InputTextModule,
    CardModule,
    StepsModule,
    ToastModule,
    FloatLabelModule,
    ButtonModule,
    PanelModule
    
  ]
})
export class PrimeModule { }

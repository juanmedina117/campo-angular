import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    StepsModule,
    ToastModule,
    FloatLabelModule,
    ButtonModule
  ],
  exports:[
    InputTextModule,
    CardModule,
    StepsModule,
    ToastModule,
    FloatLabelModule,
    ButtonModule
    
  ]
})
export class PrimeModule { }

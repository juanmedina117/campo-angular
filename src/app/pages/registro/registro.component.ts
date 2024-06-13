import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  activeIndex: number = 0;


  public pasos = signal<MenuItem[]>(
    [
      {
        label:'Registro',
        routerLink:'formulario'
      },
      {
        label:'Puntos',
        routerLink:'puntos'
      },
      {
        label:'Fotografia',
        routerLink:'foto'
      }
    ]
  );

}

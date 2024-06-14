import { Component, OnInit, inject, signal } from '@angular/core';
import { PreguntasInterfaces } from './interfaces/preguntas.interface';
import { format } from "@formkit/tempo"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumoPreguntasService } from '../services/conumo-preguntas.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-formulrio',
  templateUrl: './formulrio.component.html',
  styleUrl: './formulrio.component.scss'
})
export class FormulrioComponent implements OnInit {
  
  public router = inject(Router);
  public preguntasService = inject(ConsumoPreguntasService);
  public serviceStorage = inject(StorageService);

  public fechaActual = signal<string>('');
  public fb = inject(FormBuilder);
  public formRegistro!:FormGroup;

  public preguntas = signal<PreguntasInterfaces[]>([]);

  ngOnInit(): void {
    let fecha = new Date();
    this.fechaActual.update( () => format(fecha,'medium'));
    this.traerPreguntas();
    this.createForm();


  }

  public createForm(){

    this.formRegistro = this.fb.group({
      
      fecha: [this.fechaActual(),[Validators.required]],
      nombre: ['', [Validators.required]],
      cultivo: ['', [Validators.required]],
      alcaldia: ['', [Validators.required]],
      pueblo: ['', [Validators.required]],
      paraje: ['', [Validators.required]],
      superficie: ['', [Validators.required]],
      numeroApliacion: ['', [Validators.required]],
      folio: ['', [Validators.required]],
      suelo: ['', [Validators.required]],
      firma: ['', [Validators.required]],

    });

  }

  public irCoordenadas(form:FormGroup){
    console.log('Siguiente...');
    console.log(form);

    this.serviceStorage.setStorage('formulario',JSON.stringify(form.value))

    this.router.navigateByUrl('registro/puntos');
  }

  public traerPreguntas(){
    this.preguntasService.traerPreguntas()
        .subscribe({
          next: (preguntas) => {

            if(!preguntas) throw 'No se obtuvieron las preguntas';

            this.preguntas.set(preguntas);

          },
          error: (error) => {
            console.log(error);
            
          }
            
        });
  }

}

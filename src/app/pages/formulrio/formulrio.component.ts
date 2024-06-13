import { Component, OnInit, inject, signal } from '@angular/core';
import { PreguntasInterfaces } from './interfaces/preguntas.interface';
import { format } from "@formkit/tempo"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulrio',
  templateUrl: './formulrio.component.html',
  styleUrl: './formulrio.component.scss'
})
export class FormulrioComponent implements OnInit {

  public fechaActual = signal<string>('');
  public fb = inject(FormBuilder);
  public formRegistro!:FormGroup;
  

  public preguntas = signal<PreguntasInterfaces[]>([
    {
      pregunta: 'Nombre',
      placeholder: 'Ingresa el nombre',
      type: 'text',
      name: 'nombre'
    },
    {
      pregunta: 'Cultivo',
      placeholder: 'Ingresa el cultivo',
      type: 'text',
      name: 'cultivo'
    },
    {
      pregunta: 'Alcaldía',
      placeholder: 'Ingresa la alcaldía',
      type: 'text',
      name: 'alcaldia'
    },
    {
      pregunta: 'Pueblo',
      placeholder: 'Ingresa el pueblo',
      type: 'text',
      name: 'pueblo'
    },
    {
      pregunta: 'Paraje',
      placeholder: 'Ingresa el paraje',
      type: 'text',
      name: 'paraje'
    },
    {
      pregunta: 'Superficie a Aspejar (m2)',
      placeholder: 'Ingresa la superficie',
      type: 'number',
      name: 'superficie'
    },
    {
      pregunta: 'N° de aplicación',
      placeholder: 'Ingresa la aplicación',
      type: 'number',
      name: 'numeroApliacion'
    },
    {
      pregunta: 'Folio',
      placeholder: 'Ingresa el folio',
      type: 'text',
      name: 'folio'
    },
    {
      pregunta: 'Mejorador de suelo',
      placeholder: 'Ingresa el mejorador',
      type: 'text',
      name: 'suelo'
    },
    {
      pregunta: 'Firma',
      placeholder: '',
      type: '',
      name: 'firma'
    }

  ]);

  ngOnInit(): void {
    let fecha = new Date();
    this.fechaActual.update( () => format(fecha,'medium'));
    this.createForm();
  }

  public createForm(){

    this.formRegistro = this.fb.group({
      
      fecha: [this.fechaActual,[Validators.required]],
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
    
    
  }

}

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PreguntasInterfaces } from '../formulrio/interfaces/preguntas.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoPreguntasService {

  private http = inject(HttpClient);

  constructor() { }

  public traerPreguntas():Observable<PreguntasInterfaces[]> {

    return this.http.get<PreguntasInterfaces[]>('assets/db/preguntas.json');

  }

}

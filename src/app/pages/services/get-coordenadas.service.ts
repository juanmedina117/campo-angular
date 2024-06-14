import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCoordenadasService {

  public ubicacion = signal<[number,number]>([0,0]);

  constructor() { }


  public ubicacionLista(){
    return !!this.ubicacion;
  }


  public traerUbicacion():Promise<[number , number]>{

    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        
        ( { coords})=> {
          this.ubicacion.set([coords.longitude, coords.latitude]);
          resolve(this.ubicacion());
        },
        (err) => {
          console.log("No se obtuvo la coordenada");
          console.log(err);
          reject()                    
        }        
      )
    });
  }


}

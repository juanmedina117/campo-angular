import { Injectable, inject } from '@angular/core';
import { ConsumoMapsInterfece } from '../interfaces/consumo-geojson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGeoJsonService {

  private http = inject(HttpClient);

  constructor() { }

  public getMaps(): Observable<ConsumoMapsInterfece>{

    return this.http.get<ConsumoMapsInterfece>("/assets/json/AZP.geojson");

}

}

import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormuarioInterfaceData } from '../formulrio/interfaces/formularioResponse.interface';
import { StorageService } from '../services/storage.service';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { GetGeoJsonService } from '../services/get-geo-json.service';
import { environment } from '../../../environments/environment';
import { GetCoordenadasService } from '../services/get-coordenadas.service';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrl: './puntos.component.scss'
})
export class PuntosComponent implements AfterContentInit, OnInit {

  public serviceStorage = inject(StorageService);
  private consumoJson = inject(GetGeoJsonService);
  private ontenerCoordenada = inject(GetCoordenadasService);
  public coordendasArray = new Array();


  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;

  public coordenadas: number[][][][] = [];


  public dataFormulario = signal<FormuarioInterfaceData>({

    fecha: '',
    nombre: '',
    cultivo: '',
    alcaldia: '',
    pueblo: '',
    paraje: '',
    superficie: 0,
    numeroApliacion: '',
    folio: '',
    suelo: '',
    firma: '',
  });

  ngAfterContentInit(): void {

    this.crearMapa();

  }

  ngOnInit(): void {

    this.dataFormulario.set(JSON.parse(this.serviceStorage.getStorage('formulario')));
    console.log(this.dataFormulario());
    this.consumirMapa();
    this.traerCoordenadas();

  }

  public crearMapa() {


    mapboxgl.accessToken = environment.mapbox_key;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-99.0301907, 19.2597859],
      zoom: 10
    });

    map.on('load', () => {
      // Agregue una fuente de datos que contenga datos GeoJSON.
      map.addSource('maine',
        {
          'type': 'geojson',
          'data': {
            properties: {},
            'type': 'Feature',
            'geometry': {
              'type': 'MultiPolygon',
              // These coordinates outline Maine.                    
              "coordinates":
                this.coordenadas
            }
          }
        }
      );

      // Agrega una nueva capa para visualizar el polígono.
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // hacer referencia a la fuente de datos
        'layout': {},
        'paint': {
          'fill-color': '#0080ff', // relleno de color azul

          'fill-opacity': 0.5
        }
      });

      // Agrega un contorno negro alrededor del polígono.
      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
          'line-color': '#fff',
          'line-width': 3
        }
      });
    });




  }

  public consumirMapa() {

    this.consumoJson.getMaps()
      .subscribe({
        next: (geoJson) => {

          if (!geoJson) throw 'Data inexistente';

          const { crs, features } = geoJson;
          let array = new Array();

          features.forEach(el => {

            el.geometry.coordinates.forEach(z => {

              array.push(z);
              this.coordenadas = array;

            });

          });

        },
        error: (error) => {
          throw 'Error al consumir el servicio';

        }
      })
  }

  public capturarPunto(){
    console.log("Coordenada...");
    this.traerCoordenadas();
    
  }

  public cerrarPunto(){
    console.log("Terminar punt...");
    
  }

  public traerCoordenadas(){
    this.ontenerCoordenada.traerUbicacion()
        .then( (coordenada) =>{
          this.coordendasArray.push(coordenada);
        });

        console.log("Coordenada",this.coordendasArray);  
  }
}

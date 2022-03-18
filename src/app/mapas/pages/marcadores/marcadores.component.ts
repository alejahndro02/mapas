import    { AfterViewInit, 
            Component, 
            ElementRef,
            ViewChild      } from '@angular/core';
import * as mapboxgl         from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container{
      height:100%;
      width:100%
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!  : ElementRef;
  mapa!     : mapboxgl.Map;
  zoomLevel : number = 16;
  center    : [number, number] = [-98.76848261905333, 19.127491747406925]

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container:this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLevel

    });
    
    /* otra forma de crear un marcador es creando un div pero en lugar de poner un marcador tipo 
     pin pone un marcador tipo texto */
    //  Marcador perzonalizadoo
    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML='hola componente';

    // Se crea una instacia nueva para crear un marcador
    // marcador por defecto  
    const marker = new mapboxgl.Marker({element:markerHtml})
    .setLngLat(this.center)
    .addTo(this.mapa);
  }

}

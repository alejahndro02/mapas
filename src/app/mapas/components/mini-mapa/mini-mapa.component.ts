import { Component, 
         Input, 
         AfterViewInit, 
         ViewChild, 
         ElementRef   } from '@angular/core';
import * as mapboxgl    from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `
      div{
        width:100%;
        height:150px;
        margin: 0px
      }
    `
  ]
})
export class MiniMapaComponent implements AfterViewInit {
    // Se reciben los datos del componente padre conun decorador input 
  @Input() lngLat: [number, number] = [0,0]
    //se hace referencia al div mapa con el docorador  viewChild 
  @ViewChild('mapa') divMapa!:ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    // Se inicializa el mapa
    const mapa = new mapboxgl.Map({
      container:this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.lngLat,
      zoom:15,
      interactive: false
    });
    // Se crea un marcador 
    new mapboxgl.Marker()
    .setLngLat(this.lngLat)
    .addTo(mapa)
  }

}

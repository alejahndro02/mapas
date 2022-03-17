import { AfterViewInit, Component, 
         ElementRef,
         ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      height:100%;
      width:100%
    }
    .row{
      color:red;
      background-color:white;
      border-radius:5px;
      bottom:50px;
      left:50px;
      padding:10px;
      position:fixed;
      z-index:99999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {
  //Por medio del decorado @viewChield se hace referencia al mapa de la vista html
  @ViewChild('mapa') divMapa!  : ElementRef;
  
    mapa!     : mapboxgl.Map;
    zoomLevel : number = 16;

  constructor() { }
  /* Se implementa ngAfterViewInit() debido a que la informacion ya esta lista en este ciclo de vida 
     a diferencia de ngOnInit*/
  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container:this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[-98.76848261905333, 19.127491747406925],
      zoom:this.zoomLevel
    });
    // Con el metodo on() se crea un listener
    this.mapa.on('zoom', (e)=>{
      const zoomActual = this.mapa.getZoom()
      this.zoomLevel = zoomActual
    })
  }
  zoomInP(){
    this.mapa.zoomIn()
  }
  zoomOutP(){
    this.mapa.zoomOut()
  }
}

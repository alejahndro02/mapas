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
      width:400px;
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
    center    : [number, number] = [-98.76848261905333, 19.127491747406925]
  constructor() { }
  /* Se implementa ngAfterViewInit() debido a que la informacion ya esta lista en este ciclo de vida 
     a diferencia de ngOnInit*/
  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container:this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLevel
    });
    // Con el metodo on() se crea un listener
    this.mapa.on('zoom', (e)=>{
      const zoomActual = this.mapa.getZoom()
      this.zoomLevel = zoomActual
    })
    // Se establecio el limeti maximo del zoom 
    this.mapa.on('zoomend', (e)=>{
      const zoomActual = this.mapa.getZoom()
      if( zoomActual > 18){
        this.mapa.zoomTo(18)
      }
    })
    // Movimiento del mapa 
    this.mapa.on('move', (e)=>{
      console.log(e);
      const target = e.target
// Se destructura lo que viene por target.getCenter
      const {lng, lat} = target.getCenter()
      this.center= [lng, lat]
    })

  }
  zoomInP(){
    this.mapa.zoomIn()
  }
  zoomOutP(){
    this.mapa.zoomOut()
  }
  zoomCambio(valor:string){
  
    this.mapa.zoomTo(Number(valor))

  }
}

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
    .list-group{
      position:fixed;
      top:20px;
      right: 20px;
      z-index:99;
    }
    li{
      cursor:pointer;
    }
  `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!  : ElementRef;
  mapa!     : mapboxgl.Map;
  zoomLevel : number = 16;
  center    : [number, number] = [-98.76848261905333, 19.127491747406925]
  // arreglo de marcadores
  marcadores: mapboxgl.Marker[] = []

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container:this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLevel

    });
    // marcadores Dinamicos
    


    //  marcadodes estaticos que se inicializan cuando se inicailiza el componente 

    /* otra forma de crear un marcador es creando un div pero en lugar de poner un marcador tipo 
     pin pone un marcador tipo texto */
    //  Marcador perzonalizadoo
    /*const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML='hola componente';*/

    // Se crea una instacia nueva para crear un marcador
    // marcador por defecto  
    /*const marker = new mapboxgl.Marker({element:markerHtml})
    .setLngLat(this.center)
    .addTo(this.mapa);*/
  }
  agregarMarcador(){
    // Crea un color aleatorio
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    // Crea un marcador nuevo
    const nuevoMarcador= new mapboxgl.Marker({
      draggable:true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa)
      // se añade el nuevo marcador dentro del arreglo declarado en las propiedades
      this.marcadores.push(nuevoMarcador)
  }
  irMarcador(){}
}

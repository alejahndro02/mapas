import { Component, OnInit } from '@angular/core';
 interface MenuItem{
   ruta:string,
   nombre:string
 }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `li{
      cursor:pointer
    }`
  ]
})
export class MenuComponent implements OnInit {
  menuItem:MenuItem[]=[
    {
      ruta:'./mapas/full-screen',
      nombre:'full-screen'
    },
    {
      ruta:'./mapas/marcadores',
      nombre:'marcadores'
    },
    {
      ruta:'./mapas/propiedades',
      nombre:'propiedades'
    },
    {
      ruta:'./mapas/zoom-range',
      nombre:'zoom-range'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

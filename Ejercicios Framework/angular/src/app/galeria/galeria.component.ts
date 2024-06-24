import { Component, ElementRef } from '@angular/core';
import { RouterLinkActive, RouterLink, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {


  galeria= [
    {id: 1,
     idfoto: 1,
     ruta: "./assets/Paisaje 1.jpg",
     titulo: "Montaña y río"},
    {id: 2,
     idfoto: 2,
     ruta: "./assets/Paisaje 2.jpg",
     titulo: "Amanecer Sabana"},
    {id: 3,
     idfoto: 3,
     ruta: "./assets/Paisaje 3.jpg",
     titulo: "Cascadas"},
    {id: 4,
     idfoto: 4,
     ruta: "./assets/Paisaje 4.jpg",
     titulo: "Estanque"},
    {id: 5,
     idfoto: 5,
     ruta: "./assets/Paisaje 5.jpg",
     titulo: "Paisaje japonesa"},
    {id: 6,
     idfoto: 6,
     ruta: "./assets/Paisaje 6.jpg",
     titulo: "Llanura"},
     {id: 7,
      idfoto: 7,
      ruta: "./assets/Paisaje 7.jpg",
      titulo: "Montaña glacial"},
     {id: 8,
      idfoto: 8,
      ruta: "./assets/Paisaje 8.jpg",
      titulo: "Montañas Cielo"},
       ]

       fotoPrincipal=this.galeria[0].ruta;
       foto1=this.galeria[0].ruta;
       foto2=this.galeria[1].ruta;
       foto3=this.galeria[2].ruta;
       foto4=this.galeria[3].ruta;
       foto5=this.galeria[4].ruta;
       foto6=this.galeria[5].ruta;
       foto7=this.galeria[6].ruta;
       foto8=this.galeria[7].ruta;

  Grande(click: number) {
    this.fotoPrincipal=this.galeria[click].ruta;
  }

  ImagenPrincipal() {
    
  }

  constructor( private router: Router) {}

}

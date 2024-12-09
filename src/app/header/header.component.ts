import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Nombre: string = "";
  Edad: string = "";
  Ubicacion: string = "";
  esOscuro: boolean = false;
  esLetraGrande: boolean = false;
  cambiarModo(){this.esOscuro = !this.esOscuro;}
  cambiarLetra(){this.esLetraGrande = !this.esLetraGrande}

}

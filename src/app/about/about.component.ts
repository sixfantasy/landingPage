import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  @Input() AboutDescription: string = "Tranporte público - Metro";
  @Input() AboutExperience: string = "Disfruta de un trayecto más barato y sin atascos.";
  @Input() Schedule: string = "Lunes a Viernes: 8:00h a 20:00h - Sábados: 9:00h a 15:00h";
  @Input() email = "info@metromalaga.es";
}

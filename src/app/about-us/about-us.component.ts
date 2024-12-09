import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  name: string = "Juan";
  age: number = 20;
  location: string = "Malaga";
  isDark = false;
  isBigLetter = false;
}

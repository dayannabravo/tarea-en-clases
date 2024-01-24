import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Parte1Component } from './components/parte1/parte1.component';
import { Parte2Component } from './components/parte2/parte2.component';
import { Parte3Component } from './components/parte3/parte3.component';
import { Parte4Component } from './components/parte4/parte4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Parte1Component, Parte2Component, Parte3Component, Parte4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetaComponent } from './receta/receta.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormComponent } from './form/form.component';
import { VariosComponent } from './varios/varios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  InicioComponent,
  FormComponent,
  RecetaComponent,
  VariosComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'postres';
}

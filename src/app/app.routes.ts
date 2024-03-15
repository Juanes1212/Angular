import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RecetaComponent } from './receta/receta.component';
import { FormComponent } from './form/form.component';
import { VariosComponent } from './varios/varios.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent},
    { path: 'receta', component: RecetaComponent},
    { path: 'form', component: FormComponent},
    { path: 'varios', component: VariosComponent},
    { path: '**', component: InicioComponent}
];

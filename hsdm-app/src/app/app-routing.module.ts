import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AfiliadoDetailsComponent } from './components/afiliado-details/afiliado-details.component';

const routes: Routes = [
  { path: 'afiliados/:id', component: AfiliadoDetailsComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'afiliados', component: AfiliadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

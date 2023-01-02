import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barra',
        component: BarrasComponent
      },
      {
        path: 'barra-doble',
        component: BarrasDoblesComponent
      },
      {
        path: 'donut',
        component: DonutComponent
      },
      {
        path: 'donut-http',
        component: DonutHttpComponent
      },
      {
        path: '**',
        redirectTo: 'barra'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }

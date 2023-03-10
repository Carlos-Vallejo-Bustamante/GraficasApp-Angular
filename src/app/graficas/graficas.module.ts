import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonutComponent } from './pages/donut/donut.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonutComponent,
    GraficaBarraComponent,
    DonutHttpComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }

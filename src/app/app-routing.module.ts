import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowChartComponent }   from './show-chart/show-chart.component';

const routes: Routes = [
  { path: '', component: ShowChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

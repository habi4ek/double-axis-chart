import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { NgxChartsModule }          from '@swimlane/ngx-charts';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { ShowChartComponent }       from './show-chart/show-chart.component';
import { DoubleAxisChartComponent } from './double-axis-chart/double-axis-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowChartComponent,
    DoubleAxisChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

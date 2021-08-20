import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAlertsComponent } from './components/get-alerts/get-alerts.component';
import { GetAlertsSummaryComponent } from './components/get-alerts-summary/get-alerts-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './materials/material.module';
import { NewComponentComponent } from './components/new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAlertsComponent,
    GetAlertsSummaryComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

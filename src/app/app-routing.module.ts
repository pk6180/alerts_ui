import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAlertsComponent } from './components/get-alerts/get-alerts.component';
import { GetAlertsSummaryComponent } from './components/get-alerts-summary/get-alerts-summary.component';

const routes: Routes = [
  { path: 'get-alerts', component: GetAlertsComponent },
  { path: 'get-alerts-summary', component: GetAlertsSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

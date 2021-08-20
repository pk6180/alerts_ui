import { Component } from '@angular/core';
import { AlertRequest } from './models/alertRequest.model';
//import { FindEquipmentAlertsResponse } from './models/findEquipmentAlertsResponse';
import { GetAlertsService } from './services/get-alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipment-ehs-mdd-equipment-alerts-angular-ui';

  alertResponse!: AlertRequest;
  alertRequest!: AlertRequest;
  //selectedHero: Hero | undefined; 

  constructor(private alertService: GetAlertsService) { 
  }

  ngOnInit()   {
    //this.getAlerts();
  }

  /*getAlerts(): void {
    this.alertService.getAlerts(this.alertRequest).subscribe(alertResponse => this.alertResponse = alertResponse);
  }*/
}

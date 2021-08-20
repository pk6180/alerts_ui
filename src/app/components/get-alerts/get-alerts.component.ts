import { Component, OnInit } from '@angular/core';
import { AlertRequest } from 'src/app/models/alertRequest.model'
import { GetAlertsService } from 'src/app/services/get-alerts.service';
//import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-alerts',
  templateUrl: './get-alerts.component.html',
  styleUrls: ['./get-alerts.component.css']
})
export class GetAlertsComponent implements OnInit {

  alertStatus : FormGroup;
  alertDefinitionStatus : FormGroup;
  alertSource: FormGroup;
  checked = false;

 isVisible  = -1; // if you want to show by default some input keep it 0 for first radio, 1 for second and so on. I have kept it -1 so no input is shown by default  

  itemsList = [
    {name: 'Opened Date List'},
    {name: 'Closed Date List'},
    {name: 'Opened Date Range'},
    {name: 'Closed Date Range'},
  ];  

  onItemChange(item: any, i: number) {
    console.log({item, i});
    this.isVisible = i;
 }    

  constructor(private getAlertService: GetAlertsService,
              private fb: FormBuilder) {

     this.alertStatus = fb.group({
      open_only : false,
      closed_only : false
    });

       this.alertDefinitionStatus = fb.group({
      mechanical_production : false,
      operational_production : false,
      verfication : false
    });

     this.alertSource = fb.group({
      EW: false,
      Wayside: false,
      PL: false,
      Locomotive : false
    });
   }

  alertRequest: AlertRequest = new AlertRequest();  

  ngOnInit(): void {
  }

}

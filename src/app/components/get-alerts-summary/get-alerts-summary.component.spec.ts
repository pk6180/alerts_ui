import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlertsSummaryComponent } from './get-alerts-summary.component';

describe('GetAlertsSummaryComponent', () => {
  let component: GetAlertsSummaryComponent;
  let fixture: ComponentFixture<GetAlertsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlertsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAlertsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

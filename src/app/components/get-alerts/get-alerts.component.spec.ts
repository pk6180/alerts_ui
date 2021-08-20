import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlertsComponent } from './get-alerts.component';

describe('GetAlertsComponent', () => {
  let component: GetAlertsComponent;
  let fixture: ComponentFixture<GetAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

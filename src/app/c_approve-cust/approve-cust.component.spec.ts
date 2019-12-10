import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCustComponent } from './approve-cust.component';

describe('ApproveCustComponent', () => {
  let component: ApproveCustComponent;
  let fixture: ComponentFixture<ApproveCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

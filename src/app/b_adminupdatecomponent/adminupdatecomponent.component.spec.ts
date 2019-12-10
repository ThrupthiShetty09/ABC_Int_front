import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatecomponentComponent } from './adminupdatecomponent.component';

describe('AdminupdatecomponentComponent', () => {
  let component: AdminupdatecomponentComponent;
  let fixture: ComponentFixture<AdminupdatecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

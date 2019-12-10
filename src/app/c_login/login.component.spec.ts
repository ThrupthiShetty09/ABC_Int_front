import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { c_LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: c_LoginComponent;
  let fixture: ComponentFixture<c_LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ c_LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(c_LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

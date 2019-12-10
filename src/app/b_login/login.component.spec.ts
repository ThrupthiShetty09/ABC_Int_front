import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { b_LoginComponent } from './login.component';

describe('b_LoginComponent', () => {
  let component: b_LoginComponent;
  let fixture: ComponentFixture<b_LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ b_LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(b_LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

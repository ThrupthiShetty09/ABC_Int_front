import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentcomponentComponent } from './agentcomponent.component';

describe('AgentcomponentComponent', () => {
  let component: AgentcomponentComponent;
  let fixture: ComponentFixture<AgentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

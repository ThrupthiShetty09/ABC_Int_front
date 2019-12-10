import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmainComponent } from './agentmain.component';

describe('AgentmainComponent', () => {
  let component: AgentmainComponent;
  let fixture: ComponentFixture<AgentmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

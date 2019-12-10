import { TestBed } from '@angular/core/testing';

import { AgentregistrationserviceService } from './agentregistrationservice.service';

describe('AgentregistrationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentregistrationserviceService = TestBed.get(AgentregistrationserviceService);
    expect(service).toBeTruthy();
  });
});

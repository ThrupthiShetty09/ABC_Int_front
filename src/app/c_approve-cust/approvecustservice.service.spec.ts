import { TestBed } from '@angular/core/testing';

import { ApprovecustserviceService } from './approvecustservice.service';

describe('ApprovecustserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovecustserviceService = TestBed.get(ApprovecustserviceService);
    expect(service).toBeTruthy();
  });
});

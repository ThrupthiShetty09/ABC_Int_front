import { TestBed } from '@angular/core/testing';

import { AdminupdateserviceService } from './adminupdateservice.service';

describe('AdminupdateserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminupdateserviceService = TestBed.get(AdminupdateserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FakeLoginServiceService } from './fake-login-service.service';

describe('FakeLoginServiceService', () => {
  let service: FakeLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

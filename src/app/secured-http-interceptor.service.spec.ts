import { TestBed } from '@angular/core/testing';

import { SecuredHttpInterceptorService } from './secured-http-interceptor';

describe('SecuredHttpInterceptorService', () => {
  let service: SecuredHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuredHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

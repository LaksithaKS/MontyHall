import { TestBed } from '@angular/core/testing';

import { CommonHTTPRequestsService } from './common-httprequests.service';

describe('CommonHTTPRequestsService', () => {
  let service: CommonHTTPRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHTTPRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

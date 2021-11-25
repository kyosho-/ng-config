import { TestBed } from '@angular/core/testing';

import { NgConfigService } from './ng-config.service';

describe('NgConfigService', () => {
  let service: NgConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GpnWpLibService } from './gpn-wp-lib.service';

describe('GpnWpLibService', () => {
  let service: GpnWpLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpnWpLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

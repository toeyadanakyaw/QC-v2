import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';
import { describe, beforeEach, it } from 'node:test';

describe('CookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function expect(service: CookieService) {
  throw new Error('Function not implemented.');
}


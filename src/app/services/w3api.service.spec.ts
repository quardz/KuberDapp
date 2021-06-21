import { TestBed } from '@angular/core/testing';

import { W3apiService } from './w3api.service';

describe('W3apiService', () => {
  let service: W3apiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W3apiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

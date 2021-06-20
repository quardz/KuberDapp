import { TestBed } from '@angular/core/testing';

import { W3Service } from './w3.service';

describe('W3Service', () => {
  let service: W3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JeeService } from './jee.service';

describe('JeeService', () => {
  let service: JeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

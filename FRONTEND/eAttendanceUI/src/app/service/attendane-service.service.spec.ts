import { TestBed } from '@angular/core/testing';

import { AttendaneServiceService } from './attendane-service.service';

describe('AttendaneServiceService', () => {
  let service: AttendaneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendaneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

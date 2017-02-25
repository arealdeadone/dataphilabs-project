/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientSearchService } from './patient-search.service';

describe('PatientSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientSearchService]
    });
  });

  it('should ...', inject([PatientSearchService], (service: PatientSearchService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars-service.service';

describe('CarsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });
});

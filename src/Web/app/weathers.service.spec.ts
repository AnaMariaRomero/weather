import { TestBed } from '@angular/core/testing';

import { WeathersService } from './weathers.service';

describe('WeathersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeathersService = TestBed.get(WeathersService);
    expect(service).toBeTruthy();
  });
});

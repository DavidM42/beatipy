import { TestBed } from '@angular/core/testing';

import { BeatsaverApiService } from './beatsaver-api.service';

describe('BeatsaverApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatsaverApiService = TestBed.get(BeatsaverApiService);
    expect(service).toBeTruthy();
  });
});

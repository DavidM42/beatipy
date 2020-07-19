import { TestBed } from '@angular/core/testing';

import { LevenshteinService } from './levenshtein.service';

describe('LevenshteinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevenshteinService = TestBed.get(LevenshteinService);
    expect(service).toBeTruthy();
  });
});

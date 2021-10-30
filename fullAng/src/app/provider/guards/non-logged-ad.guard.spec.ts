import { TestBed } from '@angular/core/testing';

import { NonLoggedAdGuard } from './non-logged-ad.guard';

describe('NonLoggedAdGuard', () => {
  let guard: NonLoggedAdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonLoggedAdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

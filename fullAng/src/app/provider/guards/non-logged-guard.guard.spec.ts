import { TestBed } from '@angular/core/testing';

import { NonLoggedGuardGuard } from './non-logged-guard.guard';

describe('NonLoggedGuardGuard', () => {
  let guard: NonLoggedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonLoggedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

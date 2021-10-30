import { TestBed } from '@angular/core/testing';

import { LoggedAdGuard } from './logged-ad.guard';

describe('LoggedAdGuard', () => {
  let guard: LoggedAdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedAdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

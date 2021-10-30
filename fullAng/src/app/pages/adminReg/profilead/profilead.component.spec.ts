import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileadComponent } from './profilead.component';

describe('ProfileadComponent', () => {
  let component: ProfileadComponent;
  let fixture: ComponentFixture<ProfileadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

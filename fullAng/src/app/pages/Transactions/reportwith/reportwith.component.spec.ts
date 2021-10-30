import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportwithComponent } from './reportwith.component';

describe('ReportwithComponent', () => {
  let component: ReportwithComponent;
  let fixture: ComponentFixture<ReportwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportwithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

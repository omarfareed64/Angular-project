import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyWithUs } from './fly-with-us';

describe('FlyWithUs', () => {
  let component: FlyWithUs;
  let fixture: ComponentFixture<FlyWithUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyWithUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyWithUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

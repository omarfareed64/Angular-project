import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESim } from './e-sim';

describe('ESim', () => {
  let component: ESim;
  let fixture: ComponentFixture<ESim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ESim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsFilters } from './flights-filters';

describe('FlightsFilters', () => {
  let component: FlightsFilters;
  let fixture: ComponentFixture<FlightsFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

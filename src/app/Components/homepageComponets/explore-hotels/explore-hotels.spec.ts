import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHotels } from './explore-hotels';

describe('ExploreHotels', () => {
  let component: ExploreHotels;
  let fixture: ComponentFixture<ExploreHotels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreHotels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreHotels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPage } from './travel-page';

describe('TravelPage', () => {
  let component: TravelPage;
  let fixture: ComponentFixture<TravelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

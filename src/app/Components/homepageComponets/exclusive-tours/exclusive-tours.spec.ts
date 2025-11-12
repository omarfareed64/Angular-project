import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveTours } from './exclusive-tours';

describe('ExclusiveTours', () => {
  let component: ExclusiveTours;
  let fixture: ComponentFixture<ExclusiveTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclusiveTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusiveTours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterYachts } from './charter-yachts';

describe('CharterYachts', () => {
  let component: CharterYachts;
  let fixture: ComponentFixture<CharterYachts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharterYachts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharterYachts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

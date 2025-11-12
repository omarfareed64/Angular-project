import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateJetsPage } from './private-jets-page';

describe('PrivateJetsPage', () => {
  let component: PrivateJetsPage;
  let fixture: ComponentFixture<PrivateJetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateJetsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateJetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

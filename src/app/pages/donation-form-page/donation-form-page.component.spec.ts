import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFormPageComponent } from './donation-form-page.component';

describe('DonationFormPageComponent', () => {
  let component: DonationFormPageComponent;
  let fixture: ComponentFixture<DonationFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

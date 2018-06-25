import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSignupComponent } from './merchant-signup.component';

describe('MerchantSignupComponentComponent', () => {
  let component: MerchantSignupComponent;
  let fixture: ComponentFixture<MerchantSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

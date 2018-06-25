import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSignupComponent } from './common-signup.component';

describe('CommonSignupComponentComponent', () => {
  let component: CommonSignupComponent;
  let fixture: ComponentFixture<CommonSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

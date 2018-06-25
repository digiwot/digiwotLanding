import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerSignupComponent } from './jobseeker-signup.component';

describe('JobseekerSignupComponentComponent', () => {
  let component: JobseekerSignupComponent;
  let fixture: ComponentFixture<JobseekerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

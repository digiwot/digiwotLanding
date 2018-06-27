import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-common-signup',
  templateUrl: './common-signup.component.html',
  styleUrls: ['./common-signup.component.scss']
})
export class CommonSignupComponent implements OnInit {

  @Output() selectedSignupToParent = new EventEmitter<string>();

  commonSignupFlag = true;
  customerSignupFlag = false;
  merchantSignupFlag = false;
  jobseekerSignupFlag = false;

  constructor() { }

  ngOnInit() {
  }


  resetAllFlags() {
    this.commonSignupFlag = false;
    this.commonSignupFlag = false;
    this.customerSignupFlag = false;
    this.merchantSignupFlag = false;
  }

  setCustomerSignup() {
    this.resetAllFlags();
    this.customerSignupFlag = true;
    this.selectedSignupToParent.emit('customerSignup');
  }

  setMerchantSignup() {
    this.resetAllFlags();
    this.merchantSignupFlag = true;
    this.selectedSignupToParent.emit('merchantSignup');
  }

  setJobseekerSignup() {
    this.resetAllFlags();
    this.jobseekerSignupFlag = true;
    this.selectedSignupToParent.emit('jobSeeker');
  }
}

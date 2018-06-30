import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.scss']
})
export class JobseekerSignupComponent implements OnInit {

  @Output() mainSignupPage = new EventEmitter<string>();
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
  };
  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

  jobSeekerSignup() {
    console.log(this.user);
  }
}

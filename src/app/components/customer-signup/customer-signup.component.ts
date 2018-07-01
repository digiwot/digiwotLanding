import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})
export class CustomerSignupComponent implements OnInit {

  @Output() mainSignupPage = new EventEmitter<string>();
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    countryCode: '00977'
  };

  countryCodes = ['00977', '0091', '0086'];

  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

  customerSignup() {
    console.log(this.user);
  }
}

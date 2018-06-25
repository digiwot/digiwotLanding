import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merchant-signup',
  templateUrl: './merchant-signup.component.html',
  styleUrls: ['./merchant-signup.component.scss']
})
export class MerchantSignupComponent implements OnInit {

  @Output() mainSignupPage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

}

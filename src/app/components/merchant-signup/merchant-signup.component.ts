import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merchant-signup',
  templateUrl: './merchant-signup.component.html',
  styleUrls: ['./merchant-signup.component.scss']
})
export class MerchantSignupComponent implements OnInit {

  @Output() mainSignupPage = new EventEmitter<string>();
  countries = ['Nepal', 'India', 'China'];
  mainProductCategories = ['Apparel & Accessories', 'Arts & Entertainment'];
  owningProducts = ['shikhar', 'nokia'];
  noOfProducts = ['0-25', '26-100', '101-1000'];

  selectedCountry = '--not selected--';
  selectedMainProduct = '--not selected--';
  selectedOwningProduct = '--not selected--';
  selectedNoOfProducts = '--not selected--';

  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

  signup() {
    console.log('country: ' + this.selectedCountry);
  }

}

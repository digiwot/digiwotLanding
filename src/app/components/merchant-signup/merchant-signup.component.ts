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
  turnOvers = ['<50000', '50000-500000', '>500000'];

  // selectedCountry = '--not selected--';
  // selectedMainProduct = '--not selected--';
  // selectedOwningProduct = '--not selected--';
  // selectedNoOfProducts = '--not selected--';

  user = {
    country: 'Nepal',
    mainProduct: '--not selected--',
    owningProduct: '--not selected--',
    noOfProd: '--not selected--',
    name: '',
    email: '',
    displayName: '',
    password: '',
    cPassword: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    companyName: '',
    panNo: '',
    contactNo: '',
    regNo: '',
    vatNo: '',
    turnOver: '--not selected--',
    eximCode: '',
    gstNo: '',
    countryCode: '00977'
  };

  countryCodes = ['00977', '0091', '0086'];

  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

  signup() {
    console.log(this.user);
  }

}

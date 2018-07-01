import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {

  user = {
    name: '',
    email: '',
    amount: 0,
    isAgree: false
  };
  isUserDetailsProvided = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  validateAndGotoDonationMethods() {
    if (this.user.name && this.user.email && this.user.amount && this.user.amount > 0 && this.user.isAgree) {
      this.isUserDetailsProvided = true;
    }

  }

  gotoHomePage() {
    this.route.navigate(['/']);
  }
}

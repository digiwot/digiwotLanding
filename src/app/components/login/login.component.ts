import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    type: 'customer'
  };
  constructor(private route: Router) { }

  ngOnInit() {
  }

  gotoMainHomePage() {
    this.route.navigate(['/']);
  }

  login() {
    console.log(this.user);
  }

}

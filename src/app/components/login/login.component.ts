import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  gotoMainHomePage() {
    this.route.navigate(['/']);
  }

  login() {
    if (this.email && this.email === 'me@mail.com') {
      this.route.navigate(['/welcome']);
    }
  }

}

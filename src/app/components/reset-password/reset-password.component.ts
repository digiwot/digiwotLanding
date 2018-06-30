import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  user = {
    email: '',
    oldPwd: '',
    newPwd: '',
    cNewPwd: ''
  };
  constructor(private route: Router) { }

  ngOnInit() {
  }

  gotoMainHomePage() {
    this.route.navigate(['/']);
  }

  resetPassword() {
    console.log(this.user);
  }
}

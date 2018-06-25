import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up.page.component.html',
  styleUrls: ['./sign-up.page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  @Input() selectedSignup = 'commonSignup';

  constructor() { }

  ngOnInit() {
  }

  getSelectedLogin(eventMessage: string) {
    if (event) {
      this.selectedSignup = eventMessage;
    }
  }
}

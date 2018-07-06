import { Component, OnInit } from '@angular/core';
// import { trigger, transition, useAnimation } from '@angular/animations';
// import { bounce } from 'ng-animate';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  // animations: [
  //   trigger('bounce', [transition('* => *', useAnimation(bounce))])
  // ],
})
export class WelcomeComponent implements OnInit {

  // bounce: any;
  constructor() { }

  ngOnInit() {
  }

}

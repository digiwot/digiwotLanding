import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  days;
  hours;
  minutes;
  seconds;

  constructor(private elementRef: ElementRef, private router: Router) {
    secondsCounter.subscribe(n => {
      let countDownDate = new Date('Aug 1, 2018 00:00:00').getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // document.getElementById('demo').innerHTML = '<span class="timer-box">' +
      // this.days + '</span>d <span class="timer-box">' + this.hours + '</span>h <span class="timer-box">'
      //   + this.minutes + '</span>m <span class="timer-box">' + this.seconds + '</span>s to go live.';
      if (distance < 0) {
        document.getElementById('demo').innerHTML = 'LAUNCHED';
      }
    }
    );
  }

  ngOnInit() {
  }


  gotoSignup() {
    this.router.navigate(['/signup']);
  }


}

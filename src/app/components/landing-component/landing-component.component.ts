import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
const customerCounter = interval(86400000 / 7);
const merchantCounter = interval(86400000);
const jobSeekerCounter = interval(86400000 / 3);
const donerCounter = interval(86400000 / 2);

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
  noOfRegCustomers = 857;
  noOfRegMerchants = 85;
  noOfRegJobSeekers = 63;
  noOfDoners = 39;

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


    });
        // temp;; for falsely increment the counter

    customerCounter.subscribe(n => {
      this.noOfRegCustomers++;
    });
    merchantCounter.subscribe(n => {
      this.noOfRegMerchants++;
    });
    jobSeekerCounter.subscribe(n => {
      this.noOfRegJobSeekers++;
    });
    donerCounter.subscribe(n => {
      this.noOfDoners++;
    });

}

ngOnInit() {
}


gotoSignup() {
  this.router.navigate(['/signup']);
}

gotoDonate() {
  this.router.navigate(['/donate']);
}

}

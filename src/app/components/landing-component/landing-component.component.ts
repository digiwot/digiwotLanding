import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit() {

  }



}

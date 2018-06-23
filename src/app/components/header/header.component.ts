import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  warning_baner_content = 'Get 10% off on launch "August 1, 2018" when you signup now. Like Facebook page.';

  constructor() { }

  ngOnInit() {
  }

}

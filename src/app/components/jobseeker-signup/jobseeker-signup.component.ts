import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.scss']
})
export class JobseekerSignupComponent implements OnInit {

  @Output() mainSignupPage = new EventEmitter<string>();
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: '00977',
    resumeFileName: '',
    contactNumber: ''
  };

  countryCodes = ['00977', '0091', '0086'];
  uploadFileName: string;
  constructor() { }

  ngOnInit() {
  }

  gotoMainSignupPage() {
    this.mainSignupPage.emit('commonSignup');
  }

  jobSeekerSignup() {
    console.log(this.user);
  }
  // uploadFile() {
  //   let fullPath = document.getElementById('upload').baseURI;
  //   console.log(fullPath);
  //   if (fullPath) {
  //     let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
  //     let filename = fullPath.substring(startIndex);
  //     if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
  //         filename = filename.substring(1);
  //     }
  //     this.uploadFileName = filename;
  // }
  // }
}

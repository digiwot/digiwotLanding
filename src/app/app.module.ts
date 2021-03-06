import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up.page.component';

import { CommonSignupComponent } from './components/common-signup/common-signup.component';
import { MerchantSignupComponent } from './components/merchant-signup/merchant-signup.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { JobseekerSignupComponent } from './components/jobseeker-signup/jobseeker-signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DonatePageComponent } from './pages/donate-page/donate-page.component';
import { DonateComponent } from './components/donate/donate.component';
import { DonationFormPageComponent } from './pages/donation-form-page/donation-form-page.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  // { path: 'signup', component: SignUpPageComponent },
  // { path: 'login', component: LoginPageComponent },
  // { path: 'resetpassword', component: ResetPasswordPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  // { path: 'welcome', component: WelcomePageComponent },
  // { path: 'donation', component: DonationFormPageComponent },
  { path: 'donation', component: WelcomePageComponent },
  { path: 'why-donate', component: WelcomePageComponent },
  { path: 'signup', component: WelcomePageComponent },
  { path: 'login', component: WelcomePageComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    LandingComponentComponent,
    SignUpPageComponent,
    CommonSignupComponent,
    MerchantSignupComponent,
    CustomerSignupComponent,
    JobseekerSignupComponent,
    PageNotFoundComponent,
    PageNotFoundPageComponent,
    LoginPageComponent,
    LoginComponent,
    WelcomePageComponent,
    WelcomeComponent,
    ProfilePageComponent,
    ProfileComponent,
    ResetPasswordPageComponent,
    ResetPasswordComponent,
    DonatePageComponent,
    DonateComponent,
    DonationFormPageComponent,
    DonationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

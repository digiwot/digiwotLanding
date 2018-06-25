import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up.page.component';
import { LoginComponent } from './pages/login/login.component';

import { CommonSignupComponent } from './components/common-signup/common-signup.component';
import { MerchantSignupComponent } from './components/merchant-signup/merchant-signup.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { JobseekerSignupComponent } from './components/jobseeker-signup/jobseeker-signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'signup', component: SignUpPageComponent },
  { path: '', component: LandingPageComponent },
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
    LoginComponent,
    CommonSignupComponent,
    MerchantSignupComponent,
    CustomerSignupComponent,
    JobseekerSignupComponent,
    PageNotFoundComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

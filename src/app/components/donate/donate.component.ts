import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements AfterViewChecked {

  public didPaypalScriptLoad: boolean = false;
  public loading: boolean = true;

  public paymentAmount: number = 1;

  constructor() { }


  public paypalConfig: any = {
    env: 'sandbox',
    client: {
      sandbox: 'AWlMGZwpQbS0dq_r2Dt0ejp1TxDm72JD7Pt4Uc2mYlihAE3FU5axxS9wr4HcnVc13gB7TcbYDVLp9Vne',
      production: 'xxxxxxxxxx'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.paymentAmount, currency: 'CAD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // show success page
      });
    }
  };



  public ngAfterViewChecked(): void {
    if (!this.didPaypalScriptLoad) {
      this.loadPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
        this.loading = false;
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  payByRazorpay() {

  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    recaptcha: new FormControl(null),
  });
  title = 'captcha';
  siteKey = '';

  resolved(captchaResponse: any) {
    console.log(captchaResponse);
  }
}

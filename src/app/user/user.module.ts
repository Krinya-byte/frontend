import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import {UserRoutingModule} from "./user-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from "ng-recaptcha";
import {environment} from "../../environment/environment";
import {NgxCaptchaModule} from "@binssoft/ngx-captcha";



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxCaptchaModule,
    FormsModule
  ],
  providers:[
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptchaSiteKey,
      } as RecaptchaSettings,
    },
  ]
})
export class UserModule { }

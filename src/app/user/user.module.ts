import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import {UserRoutingModule} from "./user-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgxCaptchaModule} from "@binssoft/ngx-captcha";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    NgxCaptchaModule,
    DatePipe,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers:[

  ]
})
export class UserModule { }

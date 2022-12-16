import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {URL} from "../../../environment/URL";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {NgxCaptchaService} from "@binssoft/ngx-captcha";
import {Subscription} from "rxjs";
import * as url from "url";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  public errorCounter : number = 0;
  captchaStatus:any = null;
  captchaConfig:any = {
    length:6,
    cssClass:'custom',
    back: {
      stroke:"#2F9688",
      solid:"#f2efd2"
    } ,
    font:{
      color:"#000000",
      size:"35px"
    }
  };
  isDisabled: boolean = false;

  subscriptions : Subscription[] = [];


  constructor(private userService: UserService, private router: Router, private captchaService:NgxCaptchaService) {
  }

  ngOnInit(): void {
   this.form = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
    this.subscriptions.push(this.captchaService.captchStatus.subscribe((status)=>{
      this.captchaStatus= status;
      if (status == false) {
        alert("Opps!\nCaptcha mismatch");
      } else  if (status == true) {
        alert("Success!\nYou are right");
        this.isDisabled = false;
        this.errorCounter = 0;
      }
    }));
  }
  form: any;
  submit() {
    if (this.form.valid) {
      this.userService.submitUser(this.form.get('username')?.value, this.form.get('password')?.value).subscribe((response) => {
        localStorage.setItem('userName',response.userName);
        localStorage.setItem('loginDate',response.loginDate);
        localStorage.setItem('accounts',JSON.stringify(response.accounts));
        localStorage.setItem('customerName',response.name);
        localStorage.setItem('password',response.password);
        this.router.navigate([`${URL.homepage}`,response.userName]);
        },
        (error1 : HttpErrorResponse) => {
          if( error1.status === HttpStatusCode.Unauthorized){
            this.errorCounter++;
            if(this.errorCounter === 3){
              this.isDisabled = true;
            }
          }
          if (error1.status === HttpStatusCode.NotFound){
            alert("User not found please register to the site")
          }
        })
    }
  }

  resolved($event: string) {
    this.errorCounter = 0;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => {
      sub.unsubscribe();
    })
  }


  navigateToRegistrationSite() {
    this.router.navigateByUrl(`${URL.registration}`);
  }

  error(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
}

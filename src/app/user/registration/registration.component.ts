import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UserService} from "../user.service";
import {HttpStatusCode} from "@angular/common/http";
import {Router} from "@angular/router";
import {URL} from "../../../environment/URL";
import {Location} from "@angular/common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public registerForm: any;
  constructor(private userService: UserService, private router : Router, private location : Location) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  public error = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  submit() {
    let user : User = new User();
    user.userName = this.registerForm.get('userName')?.value;
    user.name = this.registerForm.get('name')?.value;
    user.password = this.registerForm.get('password')?.value;
    this.userService.createUser(user).subscribe(response => {
      this.router.navigateByUrl(`${URL.login}`);
      alert("Successful registration");
    },
      (error : HttpStatusCode) => {
        alert("Bad Request");
      });
  }

  back() {
    this.location.back();
  }
}

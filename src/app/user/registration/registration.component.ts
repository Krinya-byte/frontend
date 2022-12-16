import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UserService} from "../user.service";
import {HttpStatusCode} from "@angular/common/http";
import {Router} from "@angular/router";
import {URL} from "../../../environment/URL";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public myForm: any;
  constructor(private userService: UserService, private router : Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
  }

  submit() {
    let user : User = new User();
    user.userName = this.myForm.get('userName')?.value;
    user.name = this.myForm.get('name')?.value;
    user.password = this.myForm.get('password')?.value;
    this.userService.createUser(user).subscribe(response => {
      this.router.navigateByUrl(`${URL.login}`)
    },
      (error : HttpStatusCode) => {

      });
  }
}

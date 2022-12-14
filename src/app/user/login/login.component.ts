import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  error: any;

  submit() {
    if (this.form.valid) {
      this.userService.submitUser(this.form.get('username')?.value, this.form.get('password')?.value).subscribe(values => {

      })
    }
  }
}

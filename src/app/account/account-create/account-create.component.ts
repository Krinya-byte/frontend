import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpStatusCode} from "@angular/common/http";
import {AccountService} from "../account.service";
import {Account} from "../../models/Account";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit{
  myForm: any;
  customerName : string | null = localStorage.getItem('customerName')

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {

    this.myForm = new FormGroup({
      customerName: new FormControl({value :this.customerName, disabled : true}),
      deadLine: new FormControl('', [Validators.required]),
      itemName: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    let account : Account = new Account();
    account.customerName = this.myForm.get('customerName')?.value;
    account.deadLine = this.myForm.get('deadLine')?.value;
    account.itemName = this.myForm.get('itemName')?.value;
    account.comment = this.myForm.get('comment')?.value;
    account.price = this.myForm.get('price')?.value;
    let username = localStorage.getItem('userName');
    if(username)
      account.userName = username;
    let password = localStorage.getItem('password')
    if(password)
      this.accountService.createAccount(account,password).subscribe(response => {
        let accounts : Account[] = [];
        accounts.push(account);
        localStorage.setItem('accountCreated', JSON.stringify(accounts));
      },
      (error : HttpStatusCode) => {

      });
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
  }


}

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
  accountCreateForm: any;
  customerName : string | null = localStorage.getItem('customerName')

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {

    this.accountCreateForm = new FormGroup({
      customerName: new FormControl({value :this.customerName, disabled : true}),
      deadLine: new FormControl('', [Validators.required]),
      itemName: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    let account : Account = new Account();
    account.customerName = this.accountCreateForm.get('customerName')?.value;
    account.deadLine = this.accountCreateForm.get('deadLine')?.value;
    account.itemName = this.accountCreateForm.get('itemName')?.value;
    account.comment = this.accountCreateForm.get('comment')?.value;
    account.price = this.accountCreateForm.get('price')?.value;
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
          alert("Bad Request");
      });
  }

  public error = (controlName: string, errorName: string) =>{
    return this.accountCreateForm.controls[controlName].hasError(errorName);
  }


}

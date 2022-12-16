import { Component } from '@angular/core';
import {AccountService} from "../account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../models/Account";
import {Location} from "@angular/common";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountDetailsForm: any;
  customerName : string | null = localStorage.getItem('customerName')

  constructor(private location: Location) {
  }
  ngOnInit(): void {
    let account : any = localStorage.getItem('currentAccount');
    if(account)
      account = JSON.parse(account);
    if(account)
    {
      this.accountDetailsForm = new FormGroup({
        customerName: new FormControl({value :this.customerName, disabled : true}),
        deadLine: new FormControl({value : account.deadLine, disabled : true}),
        itemName: new FormControl({value : account.itemName, disabled : true}),
        comment: new FormControl({value : account.comment, disabled : true}),
        price: new FormControl({value : account.price, disabled : true}),
      });
    }
  }

  navigateBackToList() {
    this.location.back();
    localStorage.removeItem('currentAccount');
  }
}

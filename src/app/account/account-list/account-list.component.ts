import {Component, OnInit} from '@angular/core';
import {AccountComponent} from "../account/account.component";
import {Account} from "../../models/Account";
import {Router} from "@angular/router";
import {URL} from "../../../environment/URL";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  public accounts : Account[] = []
  displayedColumns: string[] = ['customerName', 'deadLine', 'itemName', 'Comment', 'Price' ];
    constructor(private router : Router) {
    }

  ngOnInit(): void {
    let data = localStorage.getItem('accounts');
      let accountCreated = localStorage.getItem('accountCreated')
      if(data) {
        let array = JSON.parse(data);
        console.log(array.length )
        if(array.length > 1)
          this.accounts.push(array);
      }
      if(accountCreated) {
        this.accounts.push(JSON.parse(accountCreated)[0]);
        //localStorage.removeItem('accountCreated');
        //console.log(this.accounts)
      }

  }

  navigateToHomePage() {
    this.router.navigate([URL.homepage,localStorage.getItem('userName')])
  }

  navigateToCreation() {
    this.router.navigate([URL.create,localStorage.getItem('userName')])

  }

  navigateToItemsPage(element : Account) {
      debugger
    localStorage.setItem('currentAccount', JSON.stringify(element));
    this.router.navigate([element.itemName])

  }
}

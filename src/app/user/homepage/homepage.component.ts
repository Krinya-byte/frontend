import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {URL} from "../../../environment/URL";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
public userName : string | null = "";
public loginDate : string | null = "";
  constructor(private router: Router) {
  }
  navigateToAccounts() {
    this.router.navigate([`${URL.list}`,this.userName]);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([`${URL.login}`]);
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName");
    this.loginDate = localStorage.getItem("loginDate");
  }
}

import { Injectable } from '@angular/core';
import {Account} from "../models/Account";
import {HttpService} from "../common/http.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends HttpService{

  private route: string = '/account'

  constructor(http: HttpClient) {super(http); }

  createAccount(account: Account, password : string) {
    let params = new HttpParams().set('password', password);
    return this.post<Account>(`${this.route}`, account, params)
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";
import {User} from "../models/User";
import {HttpService} from "../common/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  private route: string = '/user'

  constructor(http: HttpClient) {
    super(http);
  }

  public submitUser(userName: string, password: string): Observable<User> {
    let params = new HttpParams().set('password', password);
    return this.get<User>(`${this.route}/${userName}`, params) as Observable<User>;
  }

  public createUser(user: User): Observable<User | Object> {
    return this.post<User>(`${this.route}`, user);
  }
}

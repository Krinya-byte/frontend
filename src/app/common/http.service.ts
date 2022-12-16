import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url: string = "";
  private httpHeader: HttpHeaders = new HttpHeaders().set("key", "value");
  private httpParam: HttpParams = new HttpParams();

  constructor(public http: HttpClient) {
    this.url = environment.basicapiPoint;
  }

  get<T>(route: string, params?: HttpParams): Observable<T | Object> {

    return this.http.get(`${this.url + route}`, {headers: this.httpHeader, params: params ? params : this.httpParam});

  }

  post<T>(route: string, body: any, params?:HttpParams): Observable<T | Object> {

    return this.http.post(`${this.url + route}`, body, {headers: this.httpHeader,params: params ? params : this.httpParam});

  }

  delete<T>(route: string): Observable<T | Object> {

    return this.http.post(`${this.url + route}`, {headers: this.httpHeader});

  }

}

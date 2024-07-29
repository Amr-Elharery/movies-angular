import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url:string= `https://routeegypt.herokuapp.com`;
  constructor(private _HttpClient: HttpClient) { }

  login(loginValues:any): Observable<any> {
    return this._HttpClient.post(`${this._url}/signin`, loginValues);
  }

  register(registerValues:any): Observable<any>{
    return this._HttpClient.post(`${this._url}/signup`, registerValues);
  }
}

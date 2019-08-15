import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import User from './models/user.model';
import 'rxjs/Rx';
import Observable from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private signupurl = '';
  private loginurl = '';
  private logouturl = '';

  constructor(private http: Http) { }

  userSignup(user: any[]) {
    return this.http.post(signupurl, user).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error occured");
      }
    );
  }

  userLogin(user: any[]) {
    return this.http.post(loginurl, user).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error occured");
      }
    );
  }

  userLogout(user: any[]) {
    return this.http.post(logouturl, user).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error occured");
      }
    );
  }
}

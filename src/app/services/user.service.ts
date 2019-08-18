import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private signupurl = '';
  private loginurl = '';
  private logouturl = '';
  private JWT = 'JWT';

  constructor(private http: Http) { }

  signUp(user: any[]) {
    return this.http.post(this.signupurl, user).pipe(
      mapTo({created:true}),
      catchError(
        (error) => {
          console.log(error);
          return of({created:false, error:error});
        }
      )          
    );
    
  }

  signIn(user: any[]) {
    return this.http.post(this.loginurl, user).pipe(
      tap(tokens => this.saveTokens(tokens)),
      mapTo(true),
      catchError(
        (error) => {
          console.log(error);
          return of(false);
        }
      )
    );
  }

  logOut() {
    return this.http.post(this.logouturl, null).pipe(
      tap(response => this.clearTokens()),
      mapTo(true),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }

  public getJwt = () => {
    return localStorage.getItem(this.JWT);
  }

  public clearTokens = () => {
    localStorage.removeItem(this.JWT);
  }
  private saveTokens = (tokens) => {
    localStorage.setItem(this.JWT, tokens.jwt);
  }
}

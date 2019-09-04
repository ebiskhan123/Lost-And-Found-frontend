import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';
import { API_URL } from './app.config'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private signUpUrl = API_URL + 'signUp';
  private signInUrl = API_URL + 'signIn';
  private logOutUrl = API_URL + 'logOut';
  private JWT = 'JWT';

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post(this.signUpUrl, user).pipe(
      mapTo({created:true}),
      catchError(
        (error) => {
          console.log(error);
          return of({created:false, error:error});
        }
      )          
    );
    
  }

  signIn(user: any) {
    return this.http.post(this.signInUrl, user, {responseType: 'json'}).pipe(
      tap(response => this.saveTokens(response)),
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
    return this.http.post(this.logOutUrl, null).pipe(
      tap(response => this.clearTokens()),
      mapTo(true),
      catchError((error) => {
        this.clearTokens();
        console.log(error);
        return of(false);
      })
    );
  }

  isLoggedIn = () => {
    if(this.getJwt())
      return true;
    return false;
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

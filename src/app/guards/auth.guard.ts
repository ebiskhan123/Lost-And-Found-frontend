import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate()
  {

    return true;
  }
}

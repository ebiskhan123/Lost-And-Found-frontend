import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from "../services/user.service";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService:UserService, private router: Router) {  }
  canActivate(route: ActivatedRouteSnapshot)
  {
    if(this.userService.isLoggedIn()) {
      return true;
    }
    let forwardTo = '';
    for(let i = 0; i < route.url.length; i++) {
      if(i > 0)
        forwardTo += '/'
      forwardTo += `${route.url[i].path}`;      
    }
    this.router.navigateByUrl(`/signIn?forwardTo=${forwardTo}`);
    return false;
  }
}

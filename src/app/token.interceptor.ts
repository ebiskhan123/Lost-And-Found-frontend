import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './services/user.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userService:UserService, private router:Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.userService.getJwt()) {
            request = this.addToken(request, this.userService.getJwt());
        }
        return <any>next.handle(request).pipe(catchError(error => {
                if(error instanceof HttpErrorResponse && error.status === 401) {
                    return this.handle401Error(request, next);
                }
                else {
                    return throwError(error);
                }
            })
        );
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler){
        this.userService.clearTokens();
        this.router.navigate('/signIn');
        return throwError('Unauthorized Access');
    }

    private addToken = (request:HttpRequest<any>, token) => {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
} 
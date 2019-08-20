import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';
import { API_URL } from './app.config';
import { HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: Http) { }

  getItems(searchParams) {
    let url = API_URL + 'items';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
    .set("params", JSON.stringify(searchParams));
    return this.http.get(url, { headers: headers, search: params});    
  }

  getMyItems() {
    let url = API_URL + 'myItems';
    return this.http.get(url);
  }

  addItem(item) {
    let url = API_URL + 'item';
    return this.http.post(url, item).pipe(
      mapTo({saved: true}),
      catchError((error) => {
        return of({saved: false, error:error});
      })
    )
  }
}

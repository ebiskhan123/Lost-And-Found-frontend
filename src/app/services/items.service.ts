import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';
import { API_URL } from './app.config';
import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(searchParams) {
    let url = API_URL + 'items';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
    .set("params", searchParams);
    return this.http.get(url, { headers: headers, params:params});    
  }

  getMyItems() {
    let url = API_URL + 'myItems';
    return this.http.get(url);
  }

  addItem(item) {
    let url = API_URL + 'item';
    let headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(url, item, { headers: headers }).pipe(
      mapTo({saved: true}),
      catchError((error) => {
        return of({saved: false, error:error});
      })
    )
  }
}

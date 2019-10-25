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
  
  getItem(itemId: string) {
    let url = `${API_URL}item/${itemId}`;
    return this.http.get(url);
  }

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

  resolveItem(itemId) {
    let url = `${API_URL}resolveItem/${itemId}`;    
    return this.http.patch(url, {}).pipe(
      mapTo({resolved: true, error: null}),
      catchError((error) => {
        return of({resolved: false, error:error});
      })
    )
  }

  sendItemClaimRequest(message, itemId) {
    let url = `${API_URL}claimItem/${itemId}`;
    return this.sendItemRequest(url, message);
  }

  
  sendItemFoundRequest(message, itemId) {
    let url = `${API_URL}foundItem/${itemId}`;
    return this.sendItemRequest(url, message);
  }

  sendItemRequest(url, message) {
    return this.http.post(url, {message: message}).pipe(
      mapTo({saved: true}),
      catchError((error) => {
        return of({saved: false, error:error});
      })
    )
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

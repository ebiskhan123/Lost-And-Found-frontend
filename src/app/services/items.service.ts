import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private serverurl: string = 'url'

  constructor(private http: Http) { }

  getItems(location: string, category: string, lostOrFound: string){
    let url:string = this.serverurl;
    if(location||category||lostOrFound)
      {
        url += '?';
      }
    if(location) {
      url += 'location=' + location + '&';
    }
    if(category) {
        url += 'category=' + category + '&';
    }
    if(lostOrFound) {
        url += 'lostorfound=' + lostOrFound;
    }
    return this.getItemsAjax(url);
  }

  getItemsAjax(url:string) {
    return this.http.get(url);
  }


  addItems(item: any[]) {
    return this.http.post(this.serverurl, item);
  }
}

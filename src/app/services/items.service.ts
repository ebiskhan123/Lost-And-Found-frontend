import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import User from './models/user.model';
import 'rxjs/Rx';
import Observable from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private const serverurl: string = 'url'

  constructor(private http: Htttp) { }

  getItems(location: string, category: string, lostorfound: string){
    let url:string = serverurl;
    if(location!=null){
      url +='?location='+location;
    }
    if(category!=null){
      if(url.indexOf('?') > -1){
        url += '&category='+category;
      }
      else{
        url +='?category='+category;
      }
    }
    if(lostorfound!=null){
      if(url.indexOf('?') > -1){
        url += '&lostorfound='+lostorfound;
      }
      else{
        url +='?lostorfound='+lostorfound;
      }
    }
    return getItemsAjax(url);
  }

  getItemsAjax(url:string) {
    return this.http.get(url, user).map(
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


  addItems(item: any[]) {
    return this.http.post(loginurl, item).map(
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

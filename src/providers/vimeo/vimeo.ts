import {HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of'

/*
  Generated class for the VimeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VimeoProvider {
  private apiHost: string = 'https://api.vimeo.com/';
  private apiKey: string = 'a69498658147176bb14f752f497cd89f';
  categories: string = 'categories';
  url;

  constructor(private http: HttpClient) {
    console.log('Hello VimeoProvider Provider');
    this.url = this.apiHost + this.categories;
  }

  getCategory(){
    return this.http.get(`${this.url}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey),
    }).do(this.logData)
  }

  private logData(response: HttpResponse<any>) {
    console.log('logData', response);
  }

  private handleError(error: HttpErrorResponse | any) {
    return Observable.throw(error || 'Server Error')
  }
}

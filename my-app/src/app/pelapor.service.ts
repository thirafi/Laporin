import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Http, Headers,RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PelaporService {
  private _pelaporUrl = "localhost:8080/pelapor"
  constructor(private http: Http  ) { }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa('admin1:secret1')); 
  // }
  // Registerpelapor(user){
  //   let headers = new Headers();
  //   let contentheaders = new Headers({
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   });
  // this.createAuthorizationHeader(headers);
  // return this.http.post(this._pelaporUrl, user, {
  //   headers: contentheaders});
  // }
  Registerpelapor(user){
  // let headers = new Headers();
  // headers.append("Authorization", "Basic " + btoa("username:password"));
  // headers.append("Content-Type", "application/json");

  // let options = new RequestOptions({ headers: headers });
  // return this.http.post(this._pelaporUrl,user, options)}
}}

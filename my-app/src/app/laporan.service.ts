import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient, HttpParams } from '@angular/common/http';
import { ILaporan } from './laporan';
// import 'rxjs/operators/map';
import {  Http,Headers , RequestOptions ,Response} from "@angular/http";
// import 'rxjs/add/operator/map'; 
@Injectable()
export class LaporanService {
   requestOptions = {
    params: new HttpParams()
  };
  private _url: string = "http://lapor.apps.cs.ipb.ac.id/api/laporan"
  token: string;
  public apps: ILaporan[];
  public makan=1;
  constructor(
    public httpclientmodule :HttpClientModule,
    public httpClient :HttpClient,
    public http: Http,
  ) { }

  getLaporan(){
    this.token = localStorage.getItem("token");
    this.token = this.token.split("\"")[1];
    let headers = new Headers({'Authorization':'Basic ' + this.token });
    let options = new RequestOptions({headers: headers});

     }}

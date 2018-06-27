import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ganti: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: Http,
    public httpclientmodule :HttpClientModule,
  ) {
    if (localStorage.getItem("token") == null) {
      this.router.navigate(['/login']);
    }
    this.ganti= localStorage.getItem("token");
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' +  localStorage.getItem("token") });
    // let headers = new Headers({'Content-Type':'application/json'});
  // let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://localhost:8000/laporan",options).subscribe(data => {
      let response = data.json();
      console.log("sukses",response);
      // if (response.status == 200) {
      //   let user = response.data;
      //   console.log(user);
      // } else {
      //   console.log(response.message);
      // }
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
   }

  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem('token');
  
    if(localStorage.getItem('token') == null ) {
      this.router.navigate(['/login']);
    }
  }
}

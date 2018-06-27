import { Component, OnInit } from '@angular/core';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // petugas:
  petugas : {username?: string; password?:string;}={};
  submitted: boolean;
  constructor(
    public http: Http,
    public httpclientmodule :HttpClientModule,
    private route: ActivatedRoute,
  private router: Router,

  ) { }

  ngOnInit() {
  }
  login(){
  this.submitted = true;

    let headers = new Headers({'Authorization':'Basic ' +  btoa(this.petugas.username + ':' +this.petugas.password) });
    // let headers = new Headers({'Content-Type':'application/json'});
  // let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://localhost:8000/login",options).subscribe(data => {
      let response = data.status;
      // localStorage.setItem( "currentUser",JSON.stringify( );
      localStorage.setItem("token", JSON.stringify(btoa(this.petugas.username + ':' +this.petugas.password)));
      console.log("sukses",response);
      // if (response.status == 200) {
      //   let user = response.data;
      //   console.log(user);
      // } else {
      //   console.log(response.message);
      // }
      this.router.navigate(['/dashboard']);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
  }
  
}

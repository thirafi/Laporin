import { Component, OnInit } from '@angular/core';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BPClient } from 'blocking-proxy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // petugasData: any;
  ganti: any;
  showform : boolean= true;
  notif : boolean= false;
  petugasData : {nama?:string; username?:string; email?:string; jabatan?:string; no_hp?:number; password?:any;}={};
  constructor(
    public http: Http,
    public httpclientmodule :HttpClientModule,
    private route: ActivatedRoute,
  private router: Router,
  ) { 
    this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    if ( this.ganti !=  "YWRtaW46YWRtaW4xMjM="){
      this.router.navigate(['/dashboard']);
    }
  }
register(){
  let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM=','Content-Type':'application/json'});
  // let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers: headers});
  console.log(this.petugasData);
 
  this.http.post("http://localhost:8000/petugas",this.petugasData,options).subscribe(data => {
    let response = data.json();
    this.petugasData = data.json();
    // this.router.navigate(['/dashboard']);
    console.log("ini berhasil",  this.petugasData );
    this.showform = false;
    this.notif = true;
    if (response.status == 200) {
      let user = response.data;
      console.log(user);
    } else {
      console.log(response.message);
    }
  }, err => {     
    console.log("error nya apa: ",err);
  });
}
back(){
  this.router.navigate(['/dashboard']);
}

  ngOnInit() {
  }

}

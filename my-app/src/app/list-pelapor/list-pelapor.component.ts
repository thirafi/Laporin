import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-pelapor',
  templateUrl: './list-pelapor.component.html',
  styleUrls: ['./list-pelapor.component.css']
})
export class ListPelaporComponent implements OnInit {
  ganti: string;
  dataPelapor: any;
  pelaporData : {id?:any; nama?:string; nim?:string; no_hp?:number; email?:string; }={};
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: Http,
    private location: Location,
    public httpclientmodule :HttpClientModule,
  ) { 
    if (localStorage.getItem("token") == null) {
      this.router.navigate(['/login']);
  }

  this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti });
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://lapor.apps.cs.ipb.ac.id/api/pelapor",options).subscribe(data => {
      let response = data.json();
      this.dataPelapor = response;
      console.log("sukses",this.dataPelapor);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
  }
  ngOnInit() {
  }
  modal(user){
    this.pelaporData = user;
    console.log("isi dari modal", this.pelaporData);
  }
  update(data){
    this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti , 'Content-Type':'application/json' });
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.put("http://lapor.apps.cs.ipb.ac.id/api/pelapor/"+data.id,data,options).subscribe(data => {
      let response = data.json();
      this.pelaporData = response;
      console.log("sukses edit",this.pelaporData);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
    console.log("data apa:",data);
   }
   delete(data){
    this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti });
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.delete("http://lapor.apps.cs.ipb.ac.id/api/pelapor/"+data.id,options).subscribe(data => {
      let response = data.json();
      console.log("sukses delete",response);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
    window.location.reload(true);
   
   }
  logOut(){
    localStorage.removeItem('token');
  
    if(localStorage.getItem('token') == null ) {
      this.router.navigate(['/login']);
    }
  }
}

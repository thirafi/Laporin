import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-list-petugas',
  templateUrl: './list-petugas.component.html',
  styleUrls: ['./list-petugas.component.css']
})
export class ListPetugasComponent implements OnInit {
  ganti: any;
  dataPetugas: any;
  petugasData : {nama?:string; username?:string; email?:string; jabatan?:string; no_hp?:number; password?:any;}={};
  data: any;
tambah:boolean=false;
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
    this.ganti = this.ganti.split("\"")[1];
    if ( this.ganti ===  "YWRtaW46YWRtaW4xMjM="){
      this.tambah=true;
    }
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti });
    // let headers = new Headers({'Content-Type':'application/json'});
  // let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://lapor.apps.cs.ipb.ac.id/api/petugas",options).subscribe(data => {
      let response = data.json();
      this.dataPetugas = response;
      console.log("sukses",this.dataPetugas);
 
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
   }

  ngOnInit() {
  }
  modal(user){
    this.petugasData = user;
    console.log("isi dari modal", this.petugasData);
  }
  update(data){
    this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti , 'Content-Type':'application/json' });
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.put("http://lapor.apps.cs.ipb.ac.id/api/petugas/"+data.id,data,options).subscribe(data => {
      let response = data.json();
      this.petugasData = response;
      console.log("sukses edit",this.petugasData);
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
    this.http.delete("http://lapor.apps.cs.ipb.ac.id/api/petugas/"+data.id,options).subscribe(data => {
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

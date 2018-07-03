import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-list-laporan',
  templateUrl: './list-laporan.component.html',
  styleUrls: ['./list-laporan.component.css']
})
export class ListLaporanComponent implements OnInit {
  ganti: string;
  dataLaporan: {jenis_laporan?:string; deskripsi?: string; tempat?:string; foto?:string; pelapor?:any;}={};
  statusdata: { text: string; value: number; }[];
  laporanData : {jenis_laporan?:string; deskripsi?: string; tempat?:string; foto?:string; pelapor?:any; status?:number;}={};
  pelapori : {id?: any;}={};
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
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti });
    // let headers = new Headers({'Content-Type':'application/json'});
  // let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://localhost:8000/laporan",options).subscribe(data => {
      let response = data.json();
      this.laporanData = response;
      console.log("sukses",this.laporanData);
      // if (response.status == 200) {
      //   let user = response.data;
      //   console.log(user);
      // } else {
      //   console.log(response.message);
      // }
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
    this.statusdata = [
      { text: 'Belum di proses', value: 2 },
      { text: 'Sedang di proses', value: 1 },
      { text: 'Selesai', value: 0 },
    ];
    
   }
   modal(user){
     this.dataLaporan = user;
     console.log("isi dari modal", this.dataLaporan); 

   }
   compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
}
   update(data){
    this.ganti= localStorage.getItem("token");
    this.ganti = this.ganti.split("\"")[1];
    console.log("apa isi ganti", this.ganti);
    let headers = new Headers({'Authorization':'Basic ' + this.ganti , 'Content-Type':'application/json' });
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.put("http://localhost:8000/laporan/"+data.id,data,options).subscribe(data => {
      let response = data.json();
      this.dataLaporan = response;
      console.log("sukses edit",this.dataLaporan);
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
    this.http.delete("http://localhost:8000/laporan/"+data.id,options).subscribe(data => {
      let response = data.json();
      console.log("sukses delete",response);
      window.location.reload(true);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      window.location.reload(true);
    });
    window.location.reload(true);
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

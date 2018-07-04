import { Component, OnInit } from '@angular/core';
// import { PelaporService } from '../pelapor.service';
import { NgForm } from '@angular/forms';
import { Http, Headers , RequestOptions,HttpModule } from "@angular/http";
import { ERROR_COLLECTOR_TOKEN } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { error } from 'protractor';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { appendFile } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  laporanData : {jenis_laporan?:string; deskripsi?: string; tempat?:string; foto?:string; pelapor?:any;}={};
  pelapori : {id?: any;}={};
  // user: { email?: string; password?: string } = {};
  pelaporData : {id?:any; nama?:string; nim?:string; no_hp?:number; email?:string; }={};
  nim: any;
  loading:boolean=false;
  registered:boolean=false;
  showform: boolean=false;
  checknim: boolean=false;
  submitted: boolean;
  data: any;
  fileToUpload: File=null;
  notif: boolean=false;

  constructor(
    public http: Http,
    public httpclientmodule :HttpClientModule,
    // private _pelapor: PelaporService,
  ) {
    this.checknim= true;
   }

  ngOnInit() {
  }
  

  show(){
  
  this.submitted = true;
  let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
  // let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers: headers});
  console.log(options);
  console.log(this.nim);
  this.http.get("http://lapor.apps.cs.ipb.ac.id/api/pelapor/nim/"+this.nim,options).subscribe(data => {
    let response = data.json();
    this.pelaporData = data.json();
    this.registered= true;
    console.log("ini berhasil",  this.pelaporData.nim );
    if (response.status == 200) {
      let user = response.data;
      console.log(user);
    } else {
      console.log(response.message);
    }
  }, err => {     
    console.log("error nya apa: ",err);
  });
  this.checknim= false;
    this.showform= true;
                        }

  handleFileInput(event) {
    this.fileToUpload = <File>event.target.files[0];
  
  }
  notifikasi(){
    this.checknim= false;
    this.showform= false;
    this.notif = true;
  }
  back(){
    window.location.reload(true);
  }
  buatlaporan(form : NgForm) {
    this.submitted = true;
    
    console.log(this.laporanData);
    console.log(this.pelaporData);
   
      let headers = new Headers({'Content-Type':'application/json'});
      // authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password) 'Authorization':'Basic dGVzdDE6dGVzdDEyMw=='
      let options = new RequestOptions({headers: headers});
      console.log(options);
      console.log(this.pelaporData);
     if(this.registered==false){
      this.http.post("http://lapor.apps.cs.ipb.ac.id/api/pelapor",this.pelaporData,options).subscribe(data => {
        let response = data.json();
        this.pelaporData = data.json();
        console.log("ini berhasil",this.pelaporData);
        console.log("foto", this.fileToUpload);
     const fd = new FormData();
     fd.append('file',this.fileToUpload,this.fileToUpload.name);
    //  let headerss = new Headers({'Content-Type':undefined});
      // authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      // let options1 = new RequestOptions({headers: headerss});
      console.log(" fd apaa", fd);
     this.http.post("http://lapor.apps.cs.ipb.ac.id/api/uploadFile",fd).subscribe(data => {
      let response = data.json();
      console.log("ini berhasil 2",response.fileDownloadUri);
        this.laporanData.foto= response.fileDownloadUri;
        this.pelapori.id = this.pelaporData.id;
        this.laporanData.pelapor = this.pelapori;
        console.log("ini berhasil 3",this.pelapori.id);
        console.log("ini benran berhasil",this.laporanData);
      this.http.post("http://lapor.apps.cs.ipb.ac.id/api/laporan",this.laporanData).subscribe(data => {
        let response = data.json();
        console.log("ini berhasil 5",response);
        this.checknim= false;
this.showform= false;
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
  });
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

    //  Jika pernah Login
else{
  const fd = new FormData();
  fd.append('file',this.fileToUpload,this.fileToUpload.name);
  console.log("baca lah yaaa",this.laporanData);
  this.http.post("http://lapor.apps.cs.ipb.ac.id/api/uploadFile",fd).subscribe(data => {
    let response = data.json();
    console.log("ini berhasil 2",response.fileDownloadUri);
      this.laporanData.foto= response.fileDownloadUri;
      this.pelapori.id = this.pelaporData.id;
      this.laporanData.pelapor = this.pelapori;
      console.log("ini berhasil 3",this.pelapori.id);

      // this.laporanData.pelapor.id= "10";
      // laporanyya.push({foto:response.fileDownloadUri,pelapor:{id:this.pelaporData.id}})
      console.log("ini benran berhasil",this.laporanData);
    this.http.post("http://lapor.apps.cs.ipb.ac.id/api/laporan",this.laporanData).subscribe(data => {
      let response = data.json();
      console.log("ini berhasil 5",response);
      this.checknim= false;
      this.showform= false;
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
});
}
this.loading=true;
}
}
 // this.http.post("http://192.168.31.251:8080/pelapor", this.pelaporData,options).subscribe(data => {

      //   // this.storage.set(this.HAS_LOGGED_IN, true); 
      //   // this.loginState = true;        

      //   let response = data.json();
      //   console.log("ini berhasil",response);
       
      //   if (response.status == 200) {
      //     let user = response.data;
      //     console.log(user);
      //   } else {
      //     console.log(response.message);
      //   }
      // }, err => {     
      //   console.log("error nya apa: ",err);
      // });
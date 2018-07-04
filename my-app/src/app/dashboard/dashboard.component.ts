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
  dataLaporan: {length?:any;}={};
  op:number=0;
  kejadian:number=0;
  kerusakan:number=0;
  sampah:number=0;
  selesai:number=0;
  progres:number=0;
  dataPelapor: any={};
  tambah:boolean = false;
  dataPetugas: any;
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
    if ( this.ganti ===  "YWRtaW46YWRtaW4xMjM="){
      this.tambah=true;
    }
    let headers = new Headers({'Authorization':'Basic ' + this.ganti });
    // let headers = new Headers({'Content-Type':'application/json'});
  // let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW4xMjM='});
    let options = new RequestOptions({headers: headers});
    console.log("header :",options);
    this.http.get("http://lapor.apps.cs.ipb.ac.id/api/laporan",options).subscribe(data => {
      let response = data.json();
      this.dataLaporan = response;
      console.log("sukses",this.dataLaporan);
      // this.panjang = this.dataLaporan.length;
      for (var i = 0; i <  this.dataLaporan.length  ; i++) {
        if (this.dataLaporan[i].status == 0 ) this.selesai+=1;
        if (this.dataLaporan[i].status == 1 ) this.progres+=1;
        if (this.dataLaporan[i].jenis_laporan == "Laporan Kerusakan" ) this.kerusakan+=1;
        if (this.dataLaporan[i].jenis_laporan == "Laporan Operasional" ) this.op+=1;
        if (this.dataLaporan[i].jenis_laporan == "Laporan Sampah" ) this.sampah+=1;
        if (this.dataLaporan[i].jenis_laporan == "Laporan Kejadian" ) this.kejadian+=1;


      }
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
    });
    this.http.get("http://lapor.apps.cs.ipb.ac.id/api/pelapor",options).subscribe(data1 => {
      let response = data1.json();
      this.dataPelapor = response;
      console.log("sukses1",this.dataPelapor);
    }, err => {     
      console.log("Anda Belum di daftarkan oleh Admin",err);
      
    });
    this.http.get("http://lapor.apps.cs.ipb.ac.id/api/petugas",options).subscribe(data2 => {
      let response = data2.json();
      this.dataPetugas = response;
      console.log("sukses2",this.dataPetugas);
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

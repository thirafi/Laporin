import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers , RequestOptions} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // greeting = {};
  // constructor(private http: HttpClient) {
  //   let headers = new Headers({'Authorization':'Basic YWRtaW46YWRtaW5AMTIz','Content-Type': 'application/json'});
  //     // authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //     let options = new RequestOptions({headers: headers});
  //     console.log(options);
    
  //   http.get('http://192.168.31.251:8080/pelapor',options).subscribe(data => this.greeting = data);
  // }
}

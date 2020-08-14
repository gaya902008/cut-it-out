import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'cut-it-out';
  urlFormControl = new FormControl('',[    Validators.required, Validators.pattern("^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+")]
  );

  API_URL: string = "http://localhost:5000/";
  partition: any;

  constructor(private httpClient: HttpClient, private data: DataService) { }

  submitForm() {
    
    console.log('Form Submitted with value: ', this.urlFormControl.value);
    var input = this.urlFormControl.value as String;

    // trimming the youtube starter (http://youtube ...)
    const final = input.substring(input.lastIndexOf("=") + 1,input.length);
    console.log('value sent to server: ', final);
    this.data.changeURL(final);
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
      })
    };

    var partitionObservable = this.httpClient.get(this.API_URL + final, httpOptions)
    .toPromise()
    .then(result => {
     this.data.changeResult(JSON.parse(result.toString()))
    }) 
}
}

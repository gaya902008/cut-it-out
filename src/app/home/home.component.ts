import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'cut-it-out';
  urlFormControl = new FormControl('', [    Validators.required]
  );

  API_URL: string = "http://127.0.0.1:5000/";
  partition: any;

  constructor(private httpClient: HttpClient, private data: DataService) { }

  submitForm() {
    
    console.log('Form Submitted with value: ', this.urlFormControl.value);
    var input = this.urlFormControl.value as String;

    // trimming the youtube starter (http://youtube ...)
    const final = input.substring(input.lastIndexOf("=") + 1,input.length);
    console.log('value sent to server: ', final);
    this.data.changeURL(final);
    // var partitionObservable = this.httpClient.get(`${this.API_URL}/${final}`)

    // partitionObservable.subscribe(value => this.partition = value);
    // this.partition = JSON.parse(this.partition);

  }
}

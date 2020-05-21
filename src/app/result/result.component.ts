import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  url: string
  constructor(private data: DataService, public sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.url = this.data.url;  }

  getUrl() {
    return "https://www.youtube.com/embed/" + this.url;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare let YTC: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  url: string
  result;
  API_URL: string = "http://localhost:5000/";
  chapters: {time:string, title: string, id: string,text: string}[] ;

  constructor(private data: DataService, public sanitizer: DomSanitizer, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.url = this.data.url;

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'authkey',
      })
    };
    var partitionObservable = this.httpClient.get(this.API_URL + this.url, httpOptions)
      .toPromise()
      .then(result => {
        //this.data.changeResult(result)
        this.result = Object.values(result);
        this.chapters = [];
    this.result.forEach(element => {
        this.chapters.push({
          time: this.getTime(element.start_time),
          title: element.lable,
          id: (this.chapters.length +1).toString() ,
          text: element.lable
        });
    });
        var options = {
          youtubeId: this.url,
          fluid: true,
          width: '500px',
          height: '150px',
          playerVars: {
            iv_load_policy: 3,
            showinfo: 0,
            modestbranding: 1,
            wmode: 'transparent',
          },
          showTime: true,
          chapters: this.chapters,
        };
        YTC('#player', options);
      }
      )
  }

  getUrl() {
    return "https://www.youtube.com/embed/" + this.url;
  }

  getTime(value: number) : string{
    var minutes = Math.floor(value / 60);
    var seconds = value - minutes * 60;
    var finalMinutes = minutes.toString().length === 1 ? "0" + minutes : minutes.toString();
    var finalSeconds = seconds.toString().length === 1 ? "0" + seconds : seconds.toString();
    return (finalMinutes + ":" + finalSeconds);
    // if (this.chapters.length == 0) {
    //   return '0m 0s';
    // } else {
    //   let stringValue = value.toString();
    //   if (stringValue.length === 1) {
    //     return '00:0' + stringValue;
    //   } else if (stringValue.length === 2) {
    //     return '00:' + stringValue;
    //   } else if (stringValue.length === 3) {
    //     return '0' + stringValue.substring(0,1) + ":" + stringValue.substring(1,3)
    //   } else if (stringValue.length === 4) {
    //     return stringValue.substring(0,2) + ":" + stringValue.substring(2,4)
    //   } 
    //   else if (stringValue.length === 5) {

    //   }
    // )
  }
}

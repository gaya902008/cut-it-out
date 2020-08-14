import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DomSanitizer} from '@angular/platform-browser';
declare let YTC: any ;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  ;
  url: string
  result: JSON;
  constructor(private data: DataService, public sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.url = this.data.url; 
    
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
      chapters:  [
        {
          time: '0m 0s',
          title: '01 - Advent Rising - Muse',
          id: 'id1',
          text: '01 - Advent Rising - Muse',
        },
        {
          time: '03:43',
          title: '02 - Legend of Zelda - Suite',
          id: 'id2',
          text: '',
        },
        {
          time: '05:43',
          title: '03 - Legend of Zelda 11- Suite',
          id: 'id3',
          text: '',
        },
      ],
    };
    YTC('#player', options);
   }

  getUrl() {
    return "https://www.youtube.com/embed/" + this.url;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor() { }

  public changeURL(url: string) {
    this.url = url;
    console.log("got" + url)
  }
}

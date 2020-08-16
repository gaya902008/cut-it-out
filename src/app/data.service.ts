import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;
  result;
  constructor() { }

  public changeURL(url: string) {
    this.url = url;
  }

  public changeResult(result) {
    this.result = result;
    console.log("got" + this.result)
  }
}

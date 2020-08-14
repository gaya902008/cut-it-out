import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;
  result: JSON;
  constructor() { }

  public changeURL(url: string) {
    this.url = url;
  }

  public changeResult(result: JSON) {
    this.result = result;
    console.log("got" + this.result)
  }
}

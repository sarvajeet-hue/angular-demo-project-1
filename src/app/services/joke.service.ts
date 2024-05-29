import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  // http : HttpClient
  // constructor(http:HttpClient) {
  //   this.http = http;
  //  }

  constructor(private http: HttpClient) {

  }


  getJoke(){
    // return response of data like react
   return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }

}

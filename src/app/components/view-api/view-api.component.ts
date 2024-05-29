import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-api',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './view-api.component.html',
  styleUrl: './view-api.component.css'
})
export class ViewApiComponent {
  constructor(private http : HttpClient){}
  api_data = {}

  fetchData(){
    this.http.get("https://api.newswhip.com/v1/region/World/All/24?key=DevHub").subscribe((data :any) => {
      this.api_data = data;
      console.log( "apiData" ,this.api_data)
    })

  }
}


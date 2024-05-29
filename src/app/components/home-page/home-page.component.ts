import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private dbService : DbService){ }
  items : {id:string ,code:string, title : string}[] = []
  ngOnInit(){
    this.dbService.getAllSnippet().then((data : any) => {
    console.log("data:" , data)
    this.items = data;
    console.log("items : " , this.items)
  })
 }


}

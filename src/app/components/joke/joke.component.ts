import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  //this is the general syntax of getting the response and store the response in joke variable and display to the ui
  joke = "loading";
  constructor(private jokeService : JokeService){

  }
  //its like useEffect in react
  ngOnInit(){
    this.jokeService.getJoke().subscribe((data:any) => {
      this.joke = data.value
    })
  }
}

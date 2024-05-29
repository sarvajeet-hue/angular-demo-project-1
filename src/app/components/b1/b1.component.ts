import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  constructor(public countService : CounterService){

  }
}

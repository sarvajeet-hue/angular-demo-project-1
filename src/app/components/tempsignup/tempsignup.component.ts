import { Component, } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-tempsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tempsignup.component.html',
  styleUrl: './tempsignup.component.css'
})
export class TempsignupComponent {
  register(receivedData : NgForm){
    console.log("receivedData" , receivedData.value)
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountrycodePipe } from './countrycode.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [FormsModule , CommonModule , CountrycodePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  @Input() salary! : number
  @Input() phone! : number
  @Input() number! : number


  constructor(){
    console.log("pipes constructor runs")
  }
  ngOnInit(){
    console.log("ngonInit runs in pipes component")
  }
}

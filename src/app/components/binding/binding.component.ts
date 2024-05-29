import { CommonModule } from '@angular/common';
import { Component, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventEmitter } from '@angular/core';



function formatName(value : string){
  return " hi" + " " + value;
}
@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  isvalue = "Value binding";
  users = [
    {name : "krishna" , age : 23 , present : true},
    {name : "Rahul" , age : 28 , present : false},
    {name : "himanshu" , age : 26 , present : true}
  ]



     onChange(e : Event){
     console.log((e.target as HTMLInputElement).value)
       this.isvalue = (e.target as HTMLInputElement).value
 }

  @Output() myEvent = new EventEmitter<string>();

  sendData(){
    this.myEvent.emit("hi");
  }

  @Input({transform : formatName}) name : any
  @Input({transform : booleanAttribute}) isSingle! : boolean
  @Input ({transform : numberAttribute}) salary! : number

}

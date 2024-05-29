import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';




@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})


export class FormComponent {
  constructor(private sessionStorage: SessionStorageService) {}
  formLoaded: boolean = false;
  formData = {
    username: '',
    password: ''
  };
  onSubmit(){
    this.sessionStorage.set('DEMO',this.formData);


    // Set the formLoaded flag to true when you want to load the form
    // Set the formLoaded flag to true when you want to load the form



  }



  onClick(event:any){
    console.log("button Clicked")
    console.log(event)
    const value = this.sessionStorage.get('DEMO');
    console.log(value)
  }
}



@NgModule({
  imports: [
    FormsModule // Add FormsModule to imports
  ]
})
export class MyFormModule { }

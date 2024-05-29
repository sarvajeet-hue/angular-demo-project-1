import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'firebase/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authServices : AuthService, private router :Router){

  }
  // name = new FormControl("")

  email = new FormControl("" , [
    Validators.required,
    Validators.email
  ])

  password = new FormControl("" ,[
    Validators.minLength(6),
  ])


  formData = new FormGroup({
    // name : this.name,
    email: this.email,
    password : this.password
  })


  submitForm(){
    const email = this.formData.value.email
    console.log(email)
    console.log(this.formData.value)
   this.router.navigate(['/login'])
    // this.authServices.registerUser(email , this.formData.value.password)
    this.authServices.registerUser(email , this.formData.value.password)

  }

}

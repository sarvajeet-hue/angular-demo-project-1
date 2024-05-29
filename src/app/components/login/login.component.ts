import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private authservice :AuthService ,private router:Router ){}


  email = new FormControl("" , [
    Validators.required,
    Validators.email
  ])

  password = new FormControl("" , [
    Validators.required,

  ])


  loginForm = new FormGroup({
    email : this.email,
    password : this.password,

  })

  login(){
   console.log(this.loginForm.value)
    this.authservice.loginUser(this.loginForm.value.email! , this.loginForm.value.password!)
    this.router.navigate(['/'])



  //  this.router.navigate(['/create-code'])
  }
}

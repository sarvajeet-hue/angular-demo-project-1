import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { BindingComponent } from './components/binding/binding.component';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './components/pipes/pipes.component';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TempsignupComponent } from './components/tempsignup/tempsignup.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../fireBaseConfig';
import { ViewApiComponent } from './components/view-api/view-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormComponent ,BindingComponent
  , CommonModule , PipesComponent , JokeComponent , AComponent , B1Component
, LoginComponent , SignupComponent , NavbarComponent , TempsignupComponent , ViewApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    initializeApp(firebaseConfig)
  }

  receivedData(event : Event){
    console.log(event);
  }
}

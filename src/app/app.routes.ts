import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TempsignupComponent } from './components/tempsignup/tempsignup.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { authGuard } from './auth.guard';
import { SnippetComponent } from './components/snippet/snippet.component';
import { ViewApiComponent } from './components/view-api/view-api.component';


export const routes: Routes = [
  {
    path : "createBin" ,component:CreateBinComponent , canActivate: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tempsignup', component: TempsignupComponent},
  {path: 'about' , component:AboutComponent},
  {path : "" ,component:HomePageComponent},
  {path: "snippet/:id" , component:SnippetComponent},
  {path : "viewapi" , component:ViewApiComponent}
  // {path:'create-code' , component:CreateBinComponent}

];

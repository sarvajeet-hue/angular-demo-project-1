import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut , onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public uid?: string;

  constructor(private router:Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user", user)
    // ...
    this.uid = user.uid;
    console.log(uid)
    console.log("user logged in as " , user.email
    )
    } else {
    // User is signed out
    this.uid = undefined;
    console.log("user Loggout ")
    // ...
    }
  });
   }

   isAuthenticated(){
    return this.uid ? true :  false
   }

   getUid(){
    return this.uid
   }

registerUser(email:any , password:any){


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user)
    this.router.navigate(['/login'])
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    alert("something went wrong while signup"
    )
    // ..
  });
  }


loginUser(email:string , password:string){


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log(user.uid)
    this.router.navigate(['/create-code'])
    alert("Logged In Successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Invalid Email or Password")
  });
  }


  signOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    alert("Sign-out successful.")
    this.router.navigate(["/login"])
  }).catch((error) => {
  // An error happened.
  });
  }
}

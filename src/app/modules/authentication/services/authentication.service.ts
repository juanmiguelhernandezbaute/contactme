import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then (response => {
        this.sendVerifyEmail(response.user);
      })
      .catch(error => {
        console.log(error);
      });
  }
  sendVerifyEmail(user: any) {
    user.sendEmailVerification()
      .catch(error => {
        console.log(error);
      });
  }

}

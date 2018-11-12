import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

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

  initSession(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user && user.emailVerified) {
      return true;
    } else {
      return false;
    }
  }

  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  logOut() {
    firebase.auth().signOut();
  }

}

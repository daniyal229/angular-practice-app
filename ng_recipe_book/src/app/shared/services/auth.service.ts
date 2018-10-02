import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage'

@Injectable()
export class AuthService {

  public token: string = '';

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password).then(
      response => {
        this.login(email,password)
      }
    ).catch(
      error => console.log(error)
    )
  }

  isAuthenticated(): boolean{
    return !!this.token;
  }

  login(email:  string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response => {
        firebase.auth().currentUser.getIdToken().then(
          response => {
            this.token = response;
            this.router.navigate(['/home'])
          }
        )
      }
    ).catch(
      error => console.log(error)
    )
  }

  getToken(){
    return firebase.auth().currentUser.getIdToken()
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/auth/login'])
  }

  constructor(private router: Router, private localStorage: LocalStorage) { }
}

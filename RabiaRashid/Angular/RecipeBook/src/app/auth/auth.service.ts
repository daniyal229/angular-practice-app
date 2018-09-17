import * as firebase from 'firebase'
// import 'firebase/auth'; 
import { combineAll } from 'rxjs-compat/operator/combineAll';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class AuthService{

    tk:string;
    err=new EventEmitter<string>();

    constructor(private router:Router){}

    getError(){
        return this.err['message'];
    }

    signupUser(email:string,pass:string){
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(()=>this.router.navigate(['./signin']))
        .catch((err)=>console.log(err))
    }

    signInUser(email:string,pass:string){
        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then((resp)=>{
            firebase.auth().currentUser.getIdToken()
            .then(
                (resp)=>{console.log('bbbbb'+resp);this.tk=resp}
            ).catch(
                (err:Response)=>console.log('error'+err)
            )
            this.router.navigate(['./recipes']);
        })
        .catch((err)=>{console.log(err);this.err.emit(err['message']);})
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (resp)=>{console.log('resp'+resp);this.tk=resp}
        ).catch(
            (err:Response)=>console.log('error'+err)
        )
        console.log('qqqqq'+this.tk)
        return this.tk
    //    return firebase.auth().currentUser.getIdToken();
    }

    isAuthenticated(){
        return this.tk!=null;
    }

    logOut(){
        firebase.auth().signOut();
        this.tk=null;
        this.router.navigate(['./recipes']);
    }

}
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";


@Injectable()
export class FirebaseService {

  firebaseui:string;
  
  config:any = {
    apiKey: "AIzaSyAQGo1aa4HER36_YuloS8TKv1-96_Sa_Rg",
    authDomain: "appsdfisio.firebaseapp.com",
    databaseURL: "https://appsdfisio.firebaseio.com",
    projectId: "appsdfisio",
    storageBucket: "",
    messagingSenderId: "986781619624"
  };

  constructor( private router : Router) { 
     firebase.initializeApp(this.config);
      
     firebase.auth().onAuthStateChanged(x => this.authObservable(x));
     
  }

  authObservable(user:any):void{
    if (user) {
      this.firebaseui = user.uid;
      localStorage.setItem('googleAdmob',this.firebaseui);
    } else {
      localStorage.removeItem('googleAdmob');
      
      this.router.navigate(['/authentication/login']);
   }
  }

  loginEmail(email:string, password:string){  
    return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => this.loginSucesso()).catch(function(error) {
                  return false;
               });
  }

  loginSucesso(){
    var user = firebase.auth().currentUser;
    if (user) {
      this.firebaseui = user.uid;
      localStorage.setItem('googleAdmob',user.uid);
      this.router.navigate(['/dashboard/dashboard1']);
      return true;
    } else {
      return false;
    }
  }
  

  redefinirSenha(email:string):void{
    var auth = firebase.auth();
    var emailAddress = email;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });


  }

  logout():void{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

}

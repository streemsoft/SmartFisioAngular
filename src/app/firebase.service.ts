import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";


@Injectable()
export class FirebaseService {

  public firebaseui:string;
  
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
      
     firebase.auth().onAuthStateChanged(x => this.imp(x));
     
  }

  imp(c:any){
    if (c) {
      console.log('logado');
    } else {
      localStorage.removeItem('isLoggedin');
      console.log('nao logado');
      //this.router.navigate(['./pacientes/cadastro']);
   }
  }

  setUi(ui:string):void{
    this.firebaseui = ui;
  }

  validaAuth():void{
 
    if (localStorage.getItem('isLoggedin')=='t10') {
      console.log('login deu certo, permiti ficar na pagina');
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }

  loginEmail(email:string, password:string){
    

    
    return firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        var user = firebase.auth().currentUser;
        if (user) {
          localStorage.setItem('googleAdmob',user.uid);
          localStorage.setItem('googleLocation','_true');
          return 'entrou';
        } else {
          return 'nao';
        }
        }).catch(function(error) {
         
        });
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

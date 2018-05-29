import { FirebaseService } from './firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SD Fisio';

  constructor( private firebase : FirebaseService ){
    var s = localStorage.getItem('AI65z454aSy5454AQ54Go1aa4HER36');
    if (s != null){
      this.firebase.firebaseui = s;
    }else{
      this.firebase.firebaseui = '_false'
    }
  }

}

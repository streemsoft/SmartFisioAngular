import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class AgendamentoFireService {

  constructor(public fire : FirebaseService) { }

  buscarPorData(nome:string){
    var lista = firebase.database().ref(this.fire.firebaseKey+'/AGENDAMENTO/').once('value').then(x => {return x});
    
    return lista;   
}

}

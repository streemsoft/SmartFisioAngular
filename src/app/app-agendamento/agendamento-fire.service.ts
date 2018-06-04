import { Agendamento } from './agendamento.model';
import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class AgendamentoFireService {

  constructor(public fire : FirebaseService) { }

  buscarPorData(nome:string){
    var lista = firebase.database().ref(this.fire.firebaseKey+'/AGENDAMENTO/')
                     .orderByChild('datae').equalTo(nome).once('value').then(x => {return x});
    
    return lista;   
  }

  buscarPorNome(nome:string){
    var lista = firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/GERAL/')
                     .orderByChild('nome').startAt(nome).endAt('\uf8ff').once('value').then(x => {return x});
    
    return lista;   
}

salvarAgendamento(ag:Agendamento){
  var newKey = firebase.database().ref().child(this.fire.firebaseKey+'AGENDAMENTO').push().key;
  firebase.database().ref(this.fire.firebaseKey+'/AGENDAMENTO/' + newKey).set({
    key:newKey,
    datae:ag.datae,
    cliente: ag.cliente,
    keycliente: ag.keycliente;
    hora: ag.hora,
    status: ag.status,
    tempo: ag.tempo
   });
}

}

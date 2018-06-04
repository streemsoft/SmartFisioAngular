import { FirebaseService } from './../firebase.service';
import { Paciente } from './paciente.model';
import { PacSeletor } from './pacseletor.model';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class PacienteFireService {

  constructor(public fire : FirebaseService) { }

  cadastrarPac(pacSel:PacSeletor,pac:Paciente):void{
    var newKey = firebase.database().ref().child(this.fire.firebaseKey+'CLIENTE/GERAL').push().key;
    
    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/GERAL/' + newKey).set({
        key: newKey,
        nome: pacSel.nome.toUpperCase(),
        dt_nasc : pacSel.dt_nasc
    });
    var hj = new Date();
    hj.setHours(0);
    hj.setMinutes(0);
    hj.setSeconds(0);
    hj.setMilliseconds(0);
    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/REGISTRO/' + newKey).set({
      key: newKey,
      datar:  hj.getTime().toString()
     });

    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/DADOS/' + newKey).set({
        key:newKey,
        sexo:pac.sexo,
        civil:pac.civil.toUpperCase(),
        profissao:pac.profissao.toUpperCase(),
        rua:pac.rua.toUpperCase(),
        bairro:pac.bairro.toUpperCase(),
        numero:pac.numero.toUpperCase(),
        cidade:pac.cidade.toUpperCase(),
        cep:pac.cep,
        telefone:pac.telefone.toUpperCase(),
        email:pac.email,
        medico:pac.medico.toUpperCase(),
        telmed:pac.telmed,
        celular:pac.celular,
        estado:pac.estado.toUpperCase(),
        complemento:pac.complemento.toUpperCase()
    });
  }

  alterarPac(pacSel:PacSeletor,pac:Paciente):void{
    var updates = {};
    updates[ this.fire.firebaseKey+'/CLIENTES/GERAL/' + pacSel.key ] = pacSel;
    updates[this.fire.firebaseKey+'/CLIENTES/DADOS/' + pacSel.key] = pac;
  
    firebase.database().ref().update(updates);
  
  }

  excluirPac(pacSel:PacSeletor){
    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/GERAL/' + pacSel.key).remove();
    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/DADOS/' + pacSel.key).remove();
    firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/REGISTRO/' + pacSel.key).remove();
  }

  selectPacSeletor(key:string){
    var seletor = firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/GERAL/' + key).once('value').then(x => {return x.val()});
    
    return seletor;
  }

  selectPacCliente(key:string){
    var seletor = firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/DADOS/' + key).once('value').then(x => {return x.val()});
    
    return seletor;
  }

  buscarPorNome(nome:string){
       var lista = firebase.database().ref(this.fire.firebaseKey+'/CLIENTES/GERAL/')
                        .orderByChild('nome').startAt(nome).endAt('\uf8ff').once('value').then(x => {return x});
       
       return lista;   
  }

}

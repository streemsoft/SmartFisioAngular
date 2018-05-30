import { FirebaseService } from './../firebase.service';
import { Paciente } from './paciente.model';
import { PacSeletor } from './pacseletor.model';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class PacienteFireService {

  constructor(private fire : FirebaseService) { }

  cadastrarPac(pacSel:PacSeletor,pac:Paciente):void{
    var newKey = firebase.database().ref().child('CLIENTE/GERAL').push().key;
    
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
        civil:pac.civil,
        profissao:pac.profissao,
        rua:pac.rua,
        bairro:pac.bairro,
        numero:pac.numero,
        cidade:pac.cidade,
        cep:pac.cep,
        telefone:pac.telefone,
        email:pac.email,
        medico:pac.medico,
        telmed:pac.telmed
    });
  }

}

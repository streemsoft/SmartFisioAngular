import { PacienteFireService } from './../paciente-fire.service';
import { PacSeletor } from './../pacseletor.model';
import { Paciente } from './../paciente.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-cad-pac',
  templateUrl: './cad-pac.component.html',
  styleUrls: ['./cad-pac.component.css']
})
export class CadPacComponent implements OnInit {

  seletor:PacSeletor;
  cliente:Paciente;
  dtnasc:any;

  constructor( private fire:PacienteFireService, public toastr: ToastsManager, vcr: ViewContainerRef ) { 
      this.seletor = new PacSeletor();
      this.cliente = new Paciente();
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  cadastrarPaciente():void{
    let d = this.dtnasc.split('-');

    this.seletor.dt_nasc = new Date(d[1]+'/'+d[2]+'/'+d[0]).getTime().toString();

    this.fire.cadastrarPac(this.seletor,this.cliente);
    this.seletor = new PacSeletor();
    this.cliente = new Paciente();
    this.dtnasc = null;
    this.toastr.success('You are awesome!', 'Success!');
  }

  limparPaciente(){
    this.seletor = new PacSeletor();
    this.cliente = new Paciente();
  }

}

import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PacSeletor } from '../pacseletor.model';
import { Paciente } from '../paciente.model';
import { PacienteFireService } from '../paciente-fire.service';

@Component({
  selector: 'app-manu-pac',
  templateUrl: './manu-pac.component.html',
  styleUrls: ['./manu-pac.component.css']
})
export class ManuPacComponent implements OnInit {

  seletor:PacSeletor;
  cliente:Paciente;
  dtnasc:any;
  alerta:string;

  constructor( private fire:PacienteFireService, public toastr: ToastsManager, vcr: ViewContainerRef ) {
    this.seletor = new PacSeletor();
    this.cliente = new Paciente();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buscarPaciente();
  }

  cadastrarPaciente():void{
    if(this.seletor.nome == null || this.seletor.nome == ' ' || this.seletor.nome == '' || this.dtnasc == null || this.dtnasc == ' ' || this.dtnasc == ''){
      this.toastr.warning('Dados incompletos!', 'Atenção!');
      this.alerta = 'has-danger';
    }else{
        let d = this.dtnasc.split('-');
        this.seletor.dt_nasc = new Date(d[1]+'/'+d[2]+'/'+d[0]).getTime().toString();
        //upercase
        this.cliente.civil= this.cliente.civil.toUpperCase();
        this.cliente.profissao =this.cliente.profissao.toUpperCase();
        this.cliente.rua=this.cliente.rua.toUpperCase();
        this.cliente.bairro=this.cliente.bairro.toUpperCase();
        this.cliente.cidade=this.cliente.cidade.toUpperCase();
        this.cliente.medico=this.cliente.medico.toUpperCase();
        this.cliente.estado=this.cliente.estado.toUpperCase();
        this.cliente.complemento=this.cliente.complemento.toUpperCase();
        this.seletor.nome = this.seletor.nome.toUpperCase();

        this.fire.alterarPac(this.seletor,this.cliente);
        this.toastr.success('Salvo com sucesso!', 'Atenção!');
        this.alerta = '';
      }
  }

  limparPaciente(){
    this.toastr.info('Pronto!');
    this.fire.excluirPac(this.seletor);
    this.seletor = new PacSeletor();
    this.cliente = new Paciente();
    this.alerta = '';
  }

  buscarPaciente(){
     var sel = this.fire.selectPacSeletor(this.fire.fire.clienteKey);
     var cli = this.fire.selectPacCliente(this.fire.fire.clienteKey);

     sel.then(x => this.preencherSeletor(x));
     cli.then(x => this.preencherCliente(x));
     
  }

  preencherSeletor(x:any){
    if(x!=null){
      this.seletor.key = x.key;
      this.seletor.dt_nasc = x.dt_nasc;
      this.seletor.nome = x.nome;
      this.dtnasc = new Date(Number(x.dt_nasc)).toLocaleDateString();
      var temp = this.dtnasc.split('/');
      this.dtnasc = temp[2]+'-'+temp[1]+'-'+temp[0];
    }
  }

  preencherCliente(x:any){
    if(x!=null){
      this.cliente.key = x.key;
      this.cliente.medico = x.medico;
      this.cliente.numero = x.numero;
      this.cliente.profissao = x.profissao;
      this.cliente.rua = x.rua;
      this.cliente.sexo = x.sexo;
      this.cliente.telefone = x.telefone;
      this.cliente.telmed = x.telmed;
      this.cliente.bairro = x.bairro;
      this.cliente.celular = x.celular;
      this.cliente.cep = x.cep;
      this.cliente.cidade = x.cidade;
      this.cliente.civil = x.civil;
      this.cliente.complemento = x.complemento;
      this.cliente.email = x.email;
      this.cliente.estado = x.estado;
    }
  }

}

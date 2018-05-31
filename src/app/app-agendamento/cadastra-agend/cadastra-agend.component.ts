import { Agendamento } from './../agendamento.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AgendamentoFireService } from './../agendamento-fire.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-cadastra-agend',
  templateUrl: './cadastra-agend.component.html',
  styleUrls: ['./cadastra-agend.component.css']
})
export class CadastraAgendComponent implements OnInit {

  dataesc:any;
  listaAgen:any[] = [];
  controle:boolean = false;

  constructor(private fire : AgendamentoFireService, public toastr: ToastsManager, vcr: ViewContainerRef ) { 
    this.dataHoje();
    this.toastr.setRootViewContainerRef(vcr);
    this.buscarData();
  }

  ngOnInit() {
    
  }

  buscarData(){
    let d = this.dataesc.split('-');
    let dtescolhida = new Date(d[1]+'/'+d[2]+'/'+d[0]).getTime().toString();

    this.listaAgen= [];
        this.fire.buscarPorData(dtescolhida).then(x=> {
          var username = x.val();
          var json = JSON.stringify(username);
          var obj = JSON.parse(json);

          console.log(obj);

          for(let i in obj){
            var item = obj[i];
            var temp:Agendamento = new Agendamento();
            temp.key = item.key;
            temp.datae = item.nome;
            temp.cliente = item.cliente;
            temp.hora = item.hora;
            temp.status = item.status;
            this.listaAgen.push(temp);
          }       
          if(this.listaAgen.length > 0){
            this.controle = true;
          }else{            
            this.controle = false;
          }  
      });
  }

  dataHoje(){
      this.dataesc = new Date().toLocaleDateString();
      var temp = this.dataesc.split('/');
      this.dataesc = temp[2]+'-'+temp[1]+'-'+temp[0];

  }

}

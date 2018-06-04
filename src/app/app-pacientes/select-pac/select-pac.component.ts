import { Router } from '@angular/router';
import { PacSeletor } from './../pacseletor.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PacienteFireService } from '../paciente-fire.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-select-pac',
  templateUrl: './select-pac.component.html',
  styleUrls: ['./select-pac.component.css']
})
export class SelectPacComponent implements OnInit {
  public searchString: string;

  listaPac:any[] = [];
  controle:boolean = false;

  pacientes:any[] = [{nome: 'josue',dt_nasc:'10/10/2010'}];

  constructor(private fire : PacienteFireService, public toastr: ToastsManager, vcr: ViewContainerRef, private router : Router) {
       this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  buscarPaciente(){
    this.controle = false;
     if(this.searchString != null && this.searchString != '' && this.searchString != ' '){
        this.listaPac= [];
        this.fire.buscarPorNome(this.searchString.toUpperCase()).then(x=> {
          var username = x.val();
          var json = JSON.stringify(username);
          var obj = JSON.parse(json);

          for(let i in obj){
            var item = obj[i];
            if(item.nome.indexOf(this.searchString.toUpperCase()) == 0){
              var temp:PacSeletor = new PacSeletor();
              temp.key = item.key;
              temp.nome = item.nome;
              temp.dt_nasc = new Date(Number(item.dt_nasc)).toLocaleDateString();
              this.listaPac.push(temp);
            }
          }
          if(this.listaPac.length > 0){
            this.controle = true;
          }else{
            this.toastr.info('Sem registros!');
            this.controle = false;
          }
          });

          
        }else{
          this.toastr.warning('Dados incompletos!', 'Atenção!');
        }

  }

  setPacKey(key:string){
      this.fire.fire.clienteKey = key;

      switch(this.fire.fire.rotaDestino){
        case('1'):
            this.router.navigate(['/pacientes/manutencao']);
      }


  }



}

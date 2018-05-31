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

  public foodItem: PacSeletor;

  public searchString: string;

  listaPac:any[] = [];
  controle:boolean = false;

  pacientes:any[] = [{nome: 'josue',dt_nasc:'10/10/2010'}];

  constructor(private fire : PacienteFireService, public toastr: ToastsManager, vcr: ViewContainerRef) {
       this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  buscarPaciente(){
     if(this.searchString != null && this.searchString != '' && this.searchString != ' '){
        this.listaPac = [];
        this.fire.buscarPorNome(this.searchString).then(x=> {
          var username = x.val();
          var json = JSON.stringify(username);
          var obj = JSON.parse(json);

          for(let i in obj){
            var item = obj[i];
            var temp:PacSeletor = new PacSeletor();
            temp.key = item.key;
            temp.nome = item.nome;
            temp.dt_nasc = new Date(Number(item.dt_nasc)).toLocaleDateString();
            this.listaPac.push(temp);
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

  convertArray(x:any){
    var listap:PacSeletor[];
    
    x.forEach(child => listap.push( this.cc(child)));
    return listap;
  }

  cc(x:any){
    var childData = x.val();
      
    var temp:PacSeletor = new PacSeletor();
    temp.key = childData.key;
    temp.nome = childData.nome;
    temp.dt_nasc = new Date(Number(childData.dt_nasc)).toLocaleDateString();
    return temp;
  }

}

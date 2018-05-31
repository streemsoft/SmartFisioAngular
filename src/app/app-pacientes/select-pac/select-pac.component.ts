import { PacSeletor } from './../pacseletor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-pac',
  templateUrl: './select-pac.component.html',
  styleUrls: ['./select-pac.component.css']
})
export class SelectPacComponent implements OnInit {

  public foodItem: PacSeletor;

  public searchString: string;

  pacientes:any[] = [{nome: 'josue',dt_nasc:'10/10/2010'}];

  constructor() { }

  ngOnInit() {
  }

}

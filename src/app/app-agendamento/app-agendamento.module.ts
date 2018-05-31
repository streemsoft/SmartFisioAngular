import { AgendamentoFireService } from './agendamento-fire.service';
import { AppAgendamentoRoutes } from './app-agendamento.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaAgendComponent } from './consulta-agend/consulta-agend.component';
import { CadastraAgendComponent } from './cadastra-agend/cadastra-agend.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(AppAgendamentoRoutes),
    ToastModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [ConsultaAgendComponent, CadastraAgendComponent],
  providers: [AgendamentoFireService]
})
export class AppAgendamentoModule { }

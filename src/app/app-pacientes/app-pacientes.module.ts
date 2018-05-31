import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadPacComponent } from './cad-pac/cad-pac.component';
import { AppPacientesRoutes } from './app-pacientes.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ManuPacComponent } from './manu-pac/manu-pac.component';
import { SelectPacComponent } from './select-pac/select-pac.component';
import { PacienteFireService } from './paciente-fire.service';
import { ToastModule } from 'ng2-toastr';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(AppPacientesRoutes),
    ToastModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [CadPacComponent, ManuPacComponent, SelectPacComponent],
  providers:[PacienteFireService]
})
export class AppPacientesModule { }

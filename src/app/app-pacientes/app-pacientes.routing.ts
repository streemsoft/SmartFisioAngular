import { Routes } from '@angular/router';

import { CadPacComponent } from './cad-pac/cad-pac.component';
import { ManuPacComponent } from './manu-pac/manu-pac.component';
import { SelectPacComponent } from './select-pac/select-pac.component';



export const AppPacientesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'cadastro',
      component: CadPacComponent,
      data: {
        title: 'Cadastro de Paciente',
        urls: [{title: 'Paciente',url: '/cadastro'},{title: 'Cadastro'}]
      }
    },
    {
        path: 'manutencao',
        component: ManuPacComponent,
        data: {
          title: 'Manutenção de Cadastro',
          urls: [{title: 'Paciente',url: '/manutencao'},{title: 'Manutenção'}]
        }
      },
      {
        path: 'selectpac',
        component: SelectPacComponent,
        data: {
          title: 'Buscar Paciente',
          urls: [{title: 'Paciente',url: '/selectpac'},{title: 'Busca'}]
        }
      }
    ]
  }
];

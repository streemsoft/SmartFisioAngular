import { Routes } from '@angular/router';

import { AuthguardGuard } from './../authguard.guard';
import { ConsultaAgendComponent } from './consulta-agend/consulta-agend.component';
import { CadastraAgendComponent } from './cadastra-agend/cadastra-agend.component';


export const AppAgendamentoRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'cadastro',
      component: CadastraAgendComponent,
      data: {
        title: 'Novo Agendamento',
        urls: [{title: 'Agendamento',url: '/cadastro'},{title: 'Cadastro'}]
      },
      canActivate: [AuthguardGuard]
    },
    {
        path: 'consulta',
        component: ConsultaAgendComponent,
        data: {
          title: 'Meus Agendamentos',
          urls: [{title: 'Agendamento',url: '/consulta'},{title: 'Consulta'}]
        },
        canActivate: [AuthguardGuard]
      }
    ]
  }
];

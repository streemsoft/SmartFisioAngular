import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


export const AppLoginRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Cadastro de Paciente',
        urls: [{title: 'Paciente',url: '/login'},{title: 'Cadastro'}]
      }
    },
    {
        path: 'registro',
        component: RegistroComponent,
        data: {
          title: 'Manutenção de Cadastro',
          urls: [{title: 'Paciente',url: '/registro'},{title: 'Manutenção'}]
        }
      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AppLoginRoutes } from './app-login.routing';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(AppLoginRoutes),
    FormsModule
  ],
  declarations: [LoginComponent, RegistroComponent]
})
export class AppLoginModule { }
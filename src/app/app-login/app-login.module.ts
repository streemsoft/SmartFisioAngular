import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegistroComponent]
})
export class AppLoginModule { }

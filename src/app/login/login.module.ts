import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LOGIN_ROUTES } from './login.routes';

@NgModule({
  imports: [
    ReactiveFormsModule,
    LOGIN_ROUTES,
    CommonModule
  ],
  declarations: [LoginComponent, UserComponent]
})
export class LoginModule { }

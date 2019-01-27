import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent, RegisterComponent } from './components';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }

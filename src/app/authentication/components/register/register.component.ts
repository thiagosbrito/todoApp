import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatch } from '../../../core/form-validators/password-match.validator';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPass.value;
    return pass === confirmPass ? null : { notsame: true };
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', { validators: [Validators.required, Validators.minLength(3)] }],
      password: ['', { validators: [Validators.required] }],
      confirmPassword: ['']
    }, { validators: this.checkPasswords });
  }

  validatePasswordError() {
    const form = this.registerForm;
    if (form.errors) {
      return form.errors.notsame;
    }
  }

  createAccount() {
    this._auth.registerUser(this.registerForm.value).subscribe((result) => {
      this.router.navigate(['todos']);
    }, (error) => {
      console.log(error);
    });
  }

}

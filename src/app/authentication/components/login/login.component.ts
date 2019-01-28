import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      password: ['', { validators: [Validators.required] }]
    });
  }

  submitForm() {
    this._auth.login(this.loginForm.value).subscribe(
      (result) => {
        this.router.navigate(['todos', 'list']);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

}

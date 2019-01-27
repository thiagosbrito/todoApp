import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', { updateOn: 'blur', validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }]
    });
  }

  submitForm() {
    console.log(this.loginForm.value);
  }

}

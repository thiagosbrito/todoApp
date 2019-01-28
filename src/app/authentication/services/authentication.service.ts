import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { pipe } from '@angular/core/src/render3';


interface User {
  uid: string;
  email: string;
  photoUrl: string;
  catchPhrase?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: Address;
  phoneNumber: Phone[];
}

interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
}

interface Phone {
  number: string;
  type: PhoneType;
}

enum PhoneType {
  home,
  work,
  mobile
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStorage: AngularFireStorage
  ) { }

  registerUser(formData) {
    const observable = from(this.fireAuth.auth.createUserWithEmailAndPassword(formData.username, formData.password));
    return observable;
  }

  login(formData) {
    const observable = from(this.fireAuth.auth.signInWithEmailAndPassword(formData.username, formData.password));
    return observable;
  }

  logout() {
    const observable = from(this.fireAuth.auth.signOut());
    return observable;
  }
}

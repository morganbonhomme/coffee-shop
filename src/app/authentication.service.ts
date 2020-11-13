import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<firebase.default.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = this.afAuth.authState
  }


  login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider)
  }

  logout() {
    this.afAuth.signOut()
  }


}

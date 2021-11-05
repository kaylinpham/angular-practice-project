import { Injectable } from '@angular/core';
import { Auth, authState, signInWithRedirect, signOut } from '@angular/fire/auth';
import { GoogleAuthProvider } from "firebase/auth"
import { Observable } from 'rxjs';
import { User } from "firebase/auth"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = authState(auth)
    //using Observable to unsubscribe automatically }
  }

  login() { signInWithRedirect(this.auth, new GoogleAuthProvider()) }

  logout() { signOut(this.auth) }

}

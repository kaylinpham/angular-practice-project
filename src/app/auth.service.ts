import { Injectable } from '@angular/core';
import { Auth, authState, signInWithRedirect, signOut } from '@angular/fire/auth';
import { GoogleAuthProvider } from "firebase/auth"
import { Observable } from 'rxjs';
import { User } from "firebase/auth"
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth, private route: ActivatedRoute) {
    this.user$ = authState(auth)
    //using Observable to unsubscribe automatically }
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    signInWithRedirect(this.auth, new GoogleAuthProvider())
  }

  logout() { signOut(this.auth) }

}

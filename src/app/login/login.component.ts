import { Component } from '@angular/core';
import { Auth, signInWithRedirect } from '@angular/fire/auth';
import { GoogleAuthProvider } from '@firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: Auth) { }

  login() {
    signInWithRedirect(this.auth, new GoogleAuthProvider())
  }
}

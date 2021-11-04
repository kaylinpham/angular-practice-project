import { Component } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { User } from "firebase/auth"

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: User | null = null;

  constructor(private auth: Auth) {
    authState(auth).subscribe(user => this.user = user)
  }

  logout() { signOut(this.auth) }
}

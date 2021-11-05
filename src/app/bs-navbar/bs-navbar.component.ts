import { Component } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { User } from "firebase/auth"
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = authState(auth)
    //using Observable to unsubscribe automatically
  }

  logout() { signOut(this.auth) }
}

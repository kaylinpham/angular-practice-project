import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
    // in this scenario we don't need unsubscribe this subcription
    // because there is only an instance subscription in root component
    // this subscription will alive belong to lifetime of this app
    // when we navigate to other sites, this subscription won't subscribe anymore.
  }
}

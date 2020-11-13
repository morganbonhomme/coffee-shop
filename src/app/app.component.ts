import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService: UserService, private authentication: AuthenticationService, private router: Router) {
    authentication.user$.subscribe(user => {
      if (user) {
        userService.save(user)
      }
    })
  }
}

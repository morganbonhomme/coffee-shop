import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}

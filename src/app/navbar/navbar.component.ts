import { ShoppingCart } from './../model/shopping-cart';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    cart$: Observable<ShoppingCart>;

  constructor(
    public authenticationService: AuthenticationService,
    private shoppingCartService: ShoppingCartService
  ) {}

  logout() {
    this.authenticationService.logout();
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}

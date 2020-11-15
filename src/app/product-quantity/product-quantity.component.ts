import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent {
  @Input('product') product;
  @Input('shoppingCart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
    console.log(this.shoppingCart);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
    console.log(this.shoppingCart);
  }
}

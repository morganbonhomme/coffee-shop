import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input('product') product;
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {
    console.log(this.shoppingCart);
  }

  addToCart() {
    console.log(this.shoppingCart);

    this.shoppingCartService.addToCart(this.product);
  }
}

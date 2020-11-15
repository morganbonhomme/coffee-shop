import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items = [];

  constructor(public itemsMap: ShoppingCartItem[]) {
    for (let productId in itemsMap) {
      let item = itemsMap[productId]
      this.items.push( new ShoppingCartItem(item.product, item.quantity));
    }
  }

  get productIds() {
    return Object.keys(this.items);
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count;
  }

  get totalPrice() {
    let price = 0;
    for (let productId in this.items) {
      price += this.items[productId].totalPrice;
    }
    return price;
  }

  getQuantity(product) {
    let item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }
}

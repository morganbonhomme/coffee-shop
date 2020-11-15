import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: ShoppingCartItem[]) {
    for (let productId in itemsMap) {
      let item = itemsMap[productId]
      console.log(item)
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
        console.log('this.items pushed', this.items)
    }
  }

  get productIds() {
    return Object.keys(this.items);
  }

  get totalItemsCount() {
    let count = 0;
    console.log('this.items', this.items)
    console.log('this.itemsMap', this.itemsMap)


    for (let productId in this.itemsMap) {
      // console.log(this.items[productId], this.items[productId].quantity)
      count += this.itemsMap[productId].quantity;
    }
    console.log('final count', count)
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
    if (!this.itemsMap) {return; }
    let item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }
}

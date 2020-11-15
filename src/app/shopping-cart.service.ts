import { ShoppingCart } from './model/shopping-cart';
import { take, map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  private getItem(cartID: String, productID: String) {
    return this.db.object(`/shopping-carts/${cartID}/items/${productID}`);
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartID();
    return this.db.object('/shopping-carts/' + cartId)
      .snapshotChanges()
      .pipe(
        map((x: any) => {
          const items = x.payload.val().items;
          return new ShoppingCart(items);
        })
      )
  }

  private async getOrCreateCartID() {
    let cartID = localStorage.getItem('cartID');
    if (cartID) {
      return cartID;
    }
    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  async addToCart(product) {
    let cartID = await this.getOrCreateCartID();
    let item$ = this.getItem(cartID, product.key);
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item.payload.val()) {
          item$.update({
            quantity: item.payload.val().quantity + 1,
          });
        } else {
          item$.update({
            product: product.payload.val(),
            quantity: 1,
          });
        }
      });
  }

  async removeFromCart(product) {
    let cartID = await this.getOrCreateCartID();
    let item$ = this.getItem(cartID, product.key);
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item) {
          item$.update({
            quantity: item.payload.val().quantity - 1,
          });
        } else {
          item$.remove();
        }        
      });
      
  }
}

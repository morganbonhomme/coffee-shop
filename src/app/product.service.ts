import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }

  getProduct(id) {
    return this.db.object(`/products/${id}`).valueChanges();
  }

  update(product, id) {
    return this.db.object(`/products/${id}`).update(product);
  }

}

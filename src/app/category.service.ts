import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db.list('/category').valueChanges();
  }
}

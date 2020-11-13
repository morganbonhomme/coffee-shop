import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  categories$;
  constructor(public categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories()
  }



}

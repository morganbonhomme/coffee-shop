import { Component } from '@angular/core';
import { CategoryService } from './../category.service';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }
}

import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  products$;
  categories$;
  categorySelected: String;

  constructor(
    productService: ProductService, 
    categoryService: CategoryService, 
    route: ActivatedRoute) { 
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();

    route.queryParamMap
      .subscribe(param => {
        console.log(param.get('category'))
        this.categorySelected = param.get('category')
      }
       )

  }
}
 
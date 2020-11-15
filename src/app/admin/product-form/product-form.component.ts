import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {

  titleForm: String = 'Create a new product';
  categories$;
  product = {
    title: null,
    price: null,
    category: null,
    imageURL: null,
  };
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService
        .getProduct(this.id)
        .pipe(take(1))
        .subscribe((product: {
          title: any,
          price: any,
          category: any,
          imageURL: any,
        }) => (this.product = product));
      this.titleForm = `Update a product`;
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(product, this.id);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}

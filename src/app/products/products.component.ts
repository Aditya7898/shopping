import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

import 'rxjs/add/operator/switchMap'; // To handle nested or multiple observable subscription

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  category: any;
  products: Product[]=[];
  filteredProducts: Product[];
  categories$;
  constructor(private productServie: ProductService, 
              private categoryService: CategoryService,
              private route: ActivatedRoute) {

      // first async operation
      this.productServie
       .getAll().subscribe(products => {
        this.products = products;

        // Second async operation
        route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
  
          this.filteredProducts = (this.category) ? 
            this.products.filter(p => p.category === this.category) : 
             this.products;
        });
      });
      this.categories$ = this.categoryService.getCategories();
   }


}

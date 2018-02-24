import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{

  id: any;
  product= {  };
  category$: FirebaseListObservable<any>;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {

      this.category$ = this.categoryService.getCategories();
      
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id) this.productService.getProduct(this.id).take(1)
               .subscribe(p => this.product = p);
     }

   save(product){
    if(this.id) {
      this.productService.update(this.id, product);
    }
    else {
      this.productService.create(product);
    }
      this.router.navigate(['/admin/products']);
   }
   
   delete(){
     if(!confirm('Are sure to delete this product')) return;

      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
   }

}

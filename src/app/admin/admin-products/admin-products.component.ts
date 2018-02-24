import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {

  products:Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription=  this.productService.getAll()
        .subscribe(products => this.filteredProducts = this.products = products);
     
   } 

   filter(query: string){
      this.filteredProducts = (query) ? 
         this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
            this.products;
   }

   ngOnDestroy(){
      this.subscription.unsubscribe();
   }
}

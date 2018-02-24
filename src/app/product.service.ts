import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // create new 
  create(product){
    this.db.list('/products').push(product);
  }

  // update any product in product-form page
  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  // for deleting any product form db
  delete(productId){
    this.db.object('/products/' + productId).remove();
  }

  // For showing list in admin-product page
  getAll(){
   return this.db.list('/products');
  }

  // To edit any product and send id to product form component
  getProduct(productId){
   return this.db.object('/products/' + productId);
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    HomeComponent,
    ProductFormComponent,
    ProductsComponent
  ],
  imports: [
    CustomFormsModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
     
      { 
        path: 'admin/orders',
        component: AdminOrdersComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'admin/product-form', 
        component: ProductFormComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'admin/product-form/:id', 
        component: ProductFormComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService] 
      },     

      { path: 'my/orders', 
        component: MyOrdersComponent, 
        canActivate:[AuthGuardService] 
      }
    ])
  ],
  providers: [ProductService,AuthService, AuthGuardService, UserService, AdminAuthGuardService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

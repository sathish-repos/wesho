import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

export const appRoutes: Route[] = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './entry-component/home/home.component';

export const HomeSmartRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

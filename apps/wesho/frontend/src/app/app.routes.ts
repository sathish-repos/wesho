import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@wesho/home-smart').then((routes) => routes.HomeSmartRoutes),
    pathMatch: 'full',
  },
];

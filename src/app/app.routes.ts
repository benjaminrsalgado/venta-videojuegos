import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-routing-module').then((m) => m.routes),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main-routing-module').then((m) => m.routes),
  },
  { path: '**', redirectTo: '' },
];
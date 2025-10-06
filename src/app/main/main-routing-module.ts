import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./menu/menu').then((m) => m.Menu),
    children: [
      {
        path: 'popular',
        loadComponent: () =>
          import('./popular/popular').then((m) => m.Popular),
      },
      {
        path: 'downloads',
        loadComponent: () =>
          import('./downloads/downloads').then((m) => m.Downloads),
      },
      {
        path: 'coming-soon',
        loadComponent: () =>
          import('./coming-soon/coming-soon').then((m) => m.ComingSoon),
      },
      {
        path: 'add-game',
        loadComponent: () =>
          import('./add-game/add-game').then((m) => m.AddGame),
      },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

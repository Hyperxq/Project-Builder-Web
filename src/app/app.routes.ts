import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
    title: 'Home',
  },
  {
    path: 'waiting-list',
    loadComponent: () =>
      import('./waiting-list/waiting-list.component').then(
        (x) => x.WaitingListComponent,
      ),
    title: 'Home',
  },
  { path: '', redirectTo: 'waiting-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'waiting-list', pathMatch: 'full' },
];

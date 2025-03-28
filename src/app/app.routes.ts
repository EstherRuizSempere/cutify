import { Routes } from '@angular/router';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HistoryComponent } from './pages/history/history.component';
import { TracksPageComponent } from './pages/home/pages/tracks/tracks-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'tracks',
        pathMatch: 'full',
      },
      {
        path: 'tracks',
        component: TracksPageComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

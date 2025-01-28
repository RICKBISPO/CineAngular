import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';

export const routes: Routes = [
    
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: MoviesComponent
            },
            {
                path:'detalhesFilme/:id',
                component: MovieDetailsComponent
            }
        ]
    }

];

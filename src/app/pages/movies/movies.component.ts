import { Component } from '@angular/core';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-movies',
  imports: [MovieListComponent, BreadcrumbComponent, SearchBarComponent, TranslatePipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}

import { Component } from '@angular/core';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-movies',
  imports: [MovieListComponent, BreadcrumbComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}

import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderMoviesComponent } from "../../components/header-movies/header-movies.component";
import { DetailsCardMovieComponent } from "../../components/details-card-movie/details-card-movie.component";
import { DetailsCastMovieComponent } from "../../components/details-cast-movie/details-cast-movie.component";
import { DetailsOverviewMovieComponent } from "../../components/details-overview-movie/details-overview-movie.component";

@Component({
  selector: 'app-movie-details',
  imports: [SidebarComponent, HeaderMoviesComponent, DetailsCardMovieComponent, DetailsCastMovieComponent, DetailsOverviewMovieComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

}

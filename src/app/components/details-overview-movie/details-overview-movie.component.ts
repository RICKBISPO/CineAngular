import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieDetails } from '../../models/movieDetails';

@Component({
  selector: 'app-details-overview-movie',
  imports: [],
  templateUrl: './details-overview-movie.component.html',
  styleUrl: './details-overview-movie.component.scss'
})
export class DetailsOverviewMovieComponent {

  @Input() movieDetails!: MovieDetails;

}

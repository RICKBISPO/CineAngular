import { Component, OnInit } from '@angular/core';
import { DetailsCardMovieComponent } from '../../components/details-card-movie/details-card-movie.component';
import { DetailsCastMovieComponent } from '../../components/details-cast-movie/details-cast-movie.component';
import { DetailsOverviewMovieComponent } from '../../components/details-overview-movie/details-overview-movie.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/movieDetails';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Credits } from '../../models/credits';

@Component({
  selector: 'app-movie-details',
  imports: [
    DetailsCardMovieComponent,
    DetailsCastMovieComponent,
    DetailsOverviewMovieComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;
  credits!: Credits;
  movieDetails: MovieDetails = {movie: this.movie, credits: this.credits};

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    this.moviesService.getMovieDetails(movieId).subscribe({
      next: (res) => { 
        this.movie = res;
        this.movieDetails.movie = this.movie;
      }
    });

    this.moviesService.getMovieCredits(movieId).subscribe({
      next: (res) => { 
        this.credits = res;
        this.movieDetails.credits = this.credits;
      }
    })
  }
  
}

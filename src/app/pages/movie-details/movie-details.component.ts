import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsCardMovieComponent } from '../../components/details-card-movie/details-card-movie.component';
import { DetailsCastMovieComponent } from '../../components/details-cast-movie/details-cast-movie.component';
import { DetailsOverviewMovieComponent } from '../../components/details-overview-movie/details-overview-movie.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/movieDetails';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Credits } from '../../models/credits';
import { LanguageService } from '../../services/language.service';
import { DetailsReviewMovieComponent } from "../../components/details-review-movie/details-review-movie.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-details',
  imports: [
    DetailsCardMovieComponent,
    DetailsCastMovieComponent,
    DetailsOverviewMovieComponent,
    BreadcrumbComponent,
    DetailsReviewMovieComponent,
    TranslatePipe
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
    private moviesService: MoviesService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.languageService.languageSubject$.subscribe({
      next: (lang) => {
        this.moviesService.getMovieDetails(movieId, lang).subscribe({
          next: (res) => { 
            this.movie = res;
            this.movieDetails.movie = this.movie;
          }
        });
      }
    });

    this.languageService.languageSubject$.subscribe({
      next: (lang) => {
        this.moviesService.getMovieCredits(movieId, lang).subscribe({
          next: (res) => { 
            this.credits = res;
            this.movieDetails.credits = this.credits;
          }
        });
      }
    });
  }
  
}

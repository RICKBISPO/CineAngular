import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoriteMovieService } from '../../services/favorite-movie.service';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {

  svgFill: boolean = false;
  @Input() movieId: number = 0;
  @Input() movieTitle: string = '';
  @Input() movieDate: string | null = '';
  @Input() movieImg: string = '';
  @Input() movieIcon: string = '';
  @Input() movieRouterLink: string = '';
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private favoriteMovieService: FavoriteMovieService
  ) {
    this.favoriteMovieService.getFavoriteMoviesByUserId(1).subscribe({
      next: (favoriteMovies) => {
        if (
          favoriteMovies.find((fav) => fav.movieId === this.movieId) !==
          undefined
        ) {
          this.svgFill = true;
        }
      },
    });
  }

  fillSvg(): void {
    if (!this.svgFill) {
      this.favoriteMovieService
        .createFavoriteMovie({ userId: 1, movieId: this.movieId })
        .subscribe({
          next: () => {
            this.svgFill = true;
          },
        });
    } else {
      this.favoriteMovieService.getFavoriteMoviesByUserId(1).subscribe({
        next: (favoriteMovies) => {
          const favoriteMovie = favoriteMovies.find(
            (fav) => fav.movieId === this.movieId
          );
          if (favoriteMovie !== undefined) {
            this.favoriteMovieService.deleteFavoriteMovie(favoriteMovie.id).subscribe({
              next: () => {
                this.svgFill = false;
                this.movieDeleted.emit();
              },
            });
          }
        }
      });
    }
  }
  
}

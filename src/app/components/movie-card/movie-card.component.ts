import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

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

  constructor(private apiService: ApiService) {
    this.apiService.getFavoriteMoviesByUserId(1).subscribe({
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
      this.apiService
        .sendFavoriteMovie({ userId: 1, movieId: this.movieId })
        .subscribe({
          next: () => {
            this.svgFill = true;
          },
        });
    } else {
      this.apiService.getFavoriteMoviesByUserId(1).subscribe({
        next: (favoriteMovies) => {
          const favoriteMovie = favoriteMovies.find(
            (fav) => fav.movieId === this.movieId
          );
          if (favoriteMovie !== undefined) {
            this.apiService.deleteFavoriteMovie(favoriteMovie.id).subscribe({
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

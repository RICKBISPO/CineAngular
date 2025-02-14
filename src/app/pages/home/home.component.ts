import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Movie } from '../../models/movie';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MovieCardComponent, DatePipe, TranslatePipe, CommonButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  languageValue: string = "";
  viewMovieList: Array<Movie> = new Array<Movie>;

  constructor(
    private moviesService: MoviesService,
    private breadcrumbService: BreadcrumbService, 
    private languageService: LanguageService,
    private apiService: ApiService
  ) {
    this.languageService.languageSubject$.subscribe({
      next: (lang) => {
        this.languageValue = lang
      }
    });
  }

  ngOnInit(): void {
    this.loadFavoriteMovies();
  }

  ngAfterViewInit() {
    this.breadcrumbService.breadcrumbSubject$.next([]);
  }

  loadFavoriteMovies() {
    this.viewMovieList = new Array<Movie>;
    this.apiService.getFavoriteMoviesByUserId(1).subscribe({
      next: (favoriteMovies) => {  
                
        favoriteMovies.forEach((fav) => {
          this.moviesService.getMovieDetails(fav.movieId, this.languageValue).subscribe({
            next: (movie) => {     
              this.viewMovieList.push(movie);
            },
          });
        });

      }

    });  
  }

  deleteFavoriteMovieByMovieId() {
    this.loadFavoriteMovies();
  }

}

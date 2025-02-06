import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CommonButtonComponent } from '../common-button/common-button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  imports: [CommonButtonComponent, MovieCardComponent, DatePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {

  movieList: Array<Movie> = new Array<Movie>;
  viewMovieList: Array<Movie> = new Array<Movie>;
  page: number = 1;
  listedMovies: string = "";

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies(this.page).subscribe({
      next: (res) => { 
        this.movieList = res.results;
        this.viewMovieList = this.movieList;
        this.setListedMovies(this.movieList.length); 
      }
    });
  }

  ngAfterViewInit(): void {
    this.moviesService.searchedMoviesSubject$.subscribe({
      next: (searchValue) => { 
        if (searchValue !== "") {
          this.viewMovieList = this.movieList
            .filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase())); 
        }
        else {
          this.viewMovieList = this.movieList;
        }
        this.setListedMovies(this.viewMovieList.length);
      }
    });
  }

  ngOnDestroy(): void {
    this.moviesService.searchedMoviesSubject$.unsubscribe();
  }

  loadMoreMovies(): void {
    this.page += 1;
    this.moviesService.getPopularMovies(this.page).subscribe({
      next: (res) => { 
        this.movieList = [...this.movieList, ...res.results];
        this.viewMovieList = this.movieList;
        this.setListedMovies(this.movieList.length); 
      }
    });
  }

  setListedMovies(number: number): void {
    if (number < 10) {
      this.listedMovies = "0" + number;
    } else {
      this.listedMovies = number.toString();
    }
  }

}
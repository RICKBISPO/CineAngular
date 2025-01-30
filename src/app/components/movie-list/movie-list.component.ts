import { AfterViewInit, Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'app-movie-list',
  imports: [CommonButtonComponent, SearchBarComponent, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  movieList: Array<Movie> = new Array<Movie>;
  breakpoint: number = 8;
  searchedMovies: Array<Movie> = new Array<Movie>;
  listedMovies: string = "";
 
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadContent();
    this.setListedMovies(this.movieList.length);
  }

  loadContent() {
    if (!this.searchedMovies.length) {
      this.movieList = this.moviesService.getMovies(this.breakpoint);
    } else {
      this.movieList = this.searchedMovies;
    }
    this.setListedMovies(this.movieList.length);
  }

  loadMore() {
    this.breakpoint += 8;
    this.loadContent();
  } 

  loadSearchedMovies(searchedMovies: Array<Movie>) {
    this.searchedMovies = searchedMovies;
    this.loadContent();
  }

  setListedMovies(number: number) {
    this.listedMovies = ("0" + number).split("")
            .slice(-2)
            .join("");
  }

}

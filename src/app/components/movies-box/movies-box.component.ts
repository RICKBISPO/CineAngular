import { Component } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { SeeMoreButtonComponent } from '../see-more-button/see-more-button.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-movies-box',
  imports: [CardMovieComponent, SeeMoreButtonComponent, SearchBarComponent],
  templateUrl: './movies-box.component.html',
  styleUrl: './movies-box.component.scss'
})
export class MoviesBoxComponent {

  private movieList: Array<Movie>;
  private breakPointList: number = 8;
  private searchedMovies: Array<Movie> = [];

  constructor(private moviesService: MoviesService) { 
    this.movieList = moviesService.getMoviesList;
  }

  loadContent(): Array<Movie> {
    if (this.searchedMovies.length === 0) {
      return this.movieList.filter((movie, index) => index < this.breakPointList);
    }
    return this.searchedMovies;
  }

  loadMore() {
    this.breakPointList += 8;
  }

  loadSearchedMovies(searchedMovies: Array<Movie>) {
    this.searchedMovies = searchedMovies;
  }
  
}

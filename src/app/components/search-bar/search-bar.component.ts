import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {

  listedMovies: string = "";
  searchValue: string = "";
  private movieList: Array<Movie>;

  @Output() searchedMovies = new EventEmitter<Array<Movie>>;

  constructor(private moviesService: MoviesService) { 
    this.movieList = moviesService.getMoviesList;
  }

  ngOnInit(): void {
      this.listedMovies = this.formatNumber(this.movieList.length);
  }

  searchMovies() {
    const movies = this.movieList.filter((movie) => 
        movie.title.toLowerCase().includes(this.searchValue.toLowerCase()));

    if (this.searchValue.trim() !== "") {
      this.searchedMovies.emit(movies);
    } else {
      this.searchedMovies.emit([]);
    }

    this.listedMovies = this.formatNumber(movies.length);
  }

  private formatNumber(number: number): string {
    return ("0" + number).split("")
            .slice(-2)
            .join("");
  }

}

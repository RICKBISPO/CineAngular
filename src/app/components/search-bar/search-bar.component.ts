import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchValue: string = "";

  @Input() breakpoint = 0;
  @Output() searchedMovies = new EventEmitter<Array<Movie>>;

  constructor(private moviesService: MoviesService) { }

  searchMovies()  {
    if (this.searchValue !== "") {
      this.searchedMovies.emit(
        this.moviesService.findByTitle(this.searchValue, this.breakpoint)
      );
    } else {
      this.searchedMovies.emit(
        new Array<Movie>
      );
    }
  }

}

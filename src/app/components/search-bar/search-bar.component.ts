import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements AfterViewInit {

  searchedValue: string = "";

  @ViewChild('searchBarInput') searchBarInput!: ElementRef;

  constructor(private moviesService: MoviesService) { }

  ngAfterViewInit(): void {
    this.searchBarInput.nativeElement.focus();
  }

  inputSearchedValue(): void  {
    if (this.searchedValue.length >= 3 || this.searchedValue === "") {
      this.moviesService.searchedMoviesSubject$.next(this.searchedValue);
    }
  }

}
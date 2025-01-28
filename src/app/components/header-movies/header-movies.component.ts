import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-movies',
  imports: [],
  templateUrl: './header-movies.component.html',
  styleUrl: './header-movies.component.scss'
})
export class HeaderMoviesComponent implements OnInit {

  @Input() fullPagePath: string = "";
  @Input() headerTitle: string = "";
  
  pagePathDisable: string = "";
  pagePathActive: string = "";
  movie: Movie | undefined;
  movieId: number = 0;
  movieTitle: string = "";

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.moviesService.findById(this.movieId); 

    if (this.movie !== undefined) {
      this.movieTitle = this.movie.title;
    }

    if (this.headerTitle !== "") {
      this.movieTitle = this.headerTitle;
    }

    this.setPagePath();
  }

  private setPagePath() {
    const arrString = this.fullPagePath.split("");
    let count = 0;

    for (let index = arrString.length; index >= 0 && arrString[index] !== "-"; index--) {
      count++;
    } 

    console.log(arrString);
    console.log(count);
    

    this.pagePathDisable = arrString.slice(0, -count).join("");
    this.pagePathActive = arrString.slice(arrString.length - count).join("");
  }

}

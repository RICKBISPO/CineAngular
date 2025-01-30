import { Component, OnInit } from '@angular/core';
import { DetailsCardMovieComponent } from "../../components/details-card-movie/details-card-movie.component";
import { DetailsCastMovieComponent } from "../../components/details-cast-movie/details-cast-movie.component";
import { DetailsOverviewMovieComponent } from "../../components/details-overview-movie/details-overview-movie.component";
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [DetailsCardMovieComponent, DetailsCastMovieComponent, DetailsOverviewMovieComponent, BreadcrumbComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

  movieTitle = "";

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }
  
  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    const movie = this.moviesService.findById(movieId); 

    if (movie !== undefined) {
      this.movieTitle = movie.title;
    }
  }

}

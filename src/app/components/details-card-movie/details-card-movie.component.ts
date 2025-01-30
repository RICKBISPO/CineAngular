import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: 'app-details-card-movie',
  imports: [BadgeComponent],
  templateUrl: './details-card-movie.component.html',
  styleUrl: './details-card-movie.component.scss'
})
export class DetailsCardMovieComponent implements OnInit {
  
  movieId = 0;
  movie: Movie | undefined;
  movieImg = "";

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.moviesService.findById(this.movieId); 

    if (this.movie !== undefined) {
      this.movieImg = this.movie.img;
    }
  }

}

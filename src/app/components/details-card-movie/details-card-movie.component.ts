import { Component, Input, OnInit } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { MovieDetails } from '../../models/movieDetails';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details-card-movie',
  imports: [BadgeComponent, DatePipe],
  templateUrl: './details-card-movie.component.html',
  styleUrl: './details-card-movie.component.scss'
})
export class DetailsCardMovieComponent {
  
  @Input() movieDetails!: MovieDetails;

  getMovieDirecting(): string {
    let directing = "";
    this.movieDetails.credits.crew.forEach((crew) => {
      if (crew.known_for_department === "Directing") {
        directing = crew.original_name;
      }
    });
    return directing;
  }

}

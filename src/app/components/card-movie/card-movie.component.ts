import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  imports: [RouterLink],
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.scss'
})
export class CardMovieComponent {

  @Input() movieId: number = 0;
  @Input() movieTitle: string = "";
  @Input() movieDescription: string = "";
  @Input() movieImg: string = "";
  @Input() movieIcon: string = "";

}

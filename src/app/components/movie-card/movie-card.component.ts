import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  svgFill: boolean = false;

  @Input() movieId: number = 0;
  @Input() movieTitle: string = "";
  @Input() movieDate: string | null = "";
  @Input() movieImg: string = "";
  @Input() movieIcon: string = "";
  @Input() movieRouterLink: string = "";

  fillSvg(): void {
    this.svgFill = !this.svgFill;
  }
 
}

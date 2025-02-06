import { Component, Input } from '@angular/core';
import { CommonButtonComponent } from "../common-button/common-button.component";
import { AvatarComponent } from "../avatar/avatar.component";
import { MovieDetails } from '../../models/movieDetails';

@Component({
  selector: 'app-details-cast-movie',
  imports: [CommonButtonComponent, AvatarComponent],
  templateUrl: './details-cast-movie.component.html',
  styleUrl: './details-cast-movie.component.scss'
})
export class DetailsCastMovieComponent {

  modalToggle: boolean = false;
  @Input() movieDetails!: MovieDetails;

  toggleModal(): void {
    this.modalToggle = !this.modalToggle;
  }

}

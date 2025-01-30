import { Component } from '@angular/core';
import { CommonButtonComponent } from "../common-button/common-button.component";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-details-cast-movie',
  imports: [CommonButtonComponent, AvatarComponent],
  templateUrl: './details-cast-movie.component.html',
  styleUrl: './details-cast-movie.component.scss'
})
export class DetailsCastMovieComponent {

}

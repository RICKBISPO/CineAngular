import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filmes';
}

import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderMoviesComponent } from '../../components/header-movies/header-movies.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MoviesBoxComponent } from '../../components/movies-box/movies-box.component';
import { SeeMoreButtonComponent } from '../../components/see-more-button/see-more-button.component';

@Component({
  selector: 'app-movies',
  imports: [SidebarComponent, HeaderMoviesComponent, SearchBarComponent, MoviesBoxComponent, SeeMoreButtonComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}

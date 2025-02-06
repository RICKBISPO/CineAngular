import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Credits } from '../models/credits';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3/movie';
  searchedMoviesSubject$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {}

  private defaultHeaders = {
    Authorization: 'Bearer ' + environment.apiKey,
  };

  public getPopularMovies(
    page: number
  ): Observable<{ results: Movie[] }> {

    const params = new HttpParams()
      .set('language', 'pt-BR')
      .set('page', page);

    return this.http.get<{ results: Movie[] }>(`${this.apiUrl}/popular`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  public getMovieDetails(
    id: number
  ): Observable<Movie> {
    
      const params = new HttpParams().set('language', 'pt-BR');
    
      return this.http.get<Movie>(`${this.apiUrl}/${id}`, {
        params: params,
        headers: this.defaultHeaders,
      }).pipe(
        map(res => ({
          id: res.id,
          poster_path: res.poster_path,
          title: res.title,
          release_date: res.release_date,
          vote_average: res.vote_average,
          overview: res.overview,
          genres: res.genres
        } as Movie))
      );
  }

  public getMovieCredits(
    id: number
  ): Observable<Credits> { 
  
    const params = new HttpParams()
      .set('language', 'pt-BR');
  
    return this.http.get<Credits>(`${this.apiUrl}/${id}/credits`, {
      params: params,
      headers: this.defaultHeaders,
    }).pipe(
      map(res => ({
        cast: res.cast,
        crew: res.crew
      }) as Credits)
    );
  }

}

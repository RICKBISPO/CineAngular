import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { User } from '../models/user';
import { FavoriteMovie } from '../models/favoriteMovie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getReviewByMovieId(movieId: number): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(
      `${this.apiUrl}/reviews?movieId=${movieId}`
    );
  }

  public sendReview(review: Omit<Review, 'id'>): Observable<Review> {
    review.reviewDate = new Date().toISOString();
    return this.http.post<Review>(`${this.apiUrl}/reviews`, {...review});
  }
  
  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/users/${userId}`
    );
  }

  public getFavoriteMoviesByUserId(userId: number): Observable<Array<FavoriteMovie>> {
    return this.http.get<Array<FavoriteMovie>>(
      `${this.apiUrl}/favoriteMovies/?userId=${userId}`
    );
  }

  public sendFavoriteMovie(favoriteMovie: Omit<FavoriteMovie, 'id'>): Observable<FavoriteMovie> {
    return this.http.post<FavoriteMovie>(
      `${this.apiUrl}/favoriteMovies`, {...favoriteMovie}
    );
  }

  public deleteFavoriteMovie(id: number): Observable<FavoriteMovie> {
    return this.http.delete<FavoriteMovie>(
      `${this.apiUrl}/favoriteMovies/${id}`
    );
  }

}

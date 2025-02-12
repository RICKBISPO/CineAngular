import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getReview(): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(
      `${this.apiUrl}/reviews`
    );
  }

  public getReviewByMovieId(movieId: number): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(
      `${this.apiUrl}/reviews?movieId=${movieId}`
    );
  }

  public sendReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, {...review});
  }
  
}

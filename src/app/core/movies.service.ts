import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(page: number = 1) {
    return this.http.get<any>(
      `${environment.api_base}/movie/popular?language=en-US&page=${page}`
    );
  }

  getMovieDetails(id: number) {
    return this.http.get<any>(`${environment.api_base}/movie/${id}`);
  }
}

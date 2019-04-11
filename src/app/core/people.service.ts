import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(page: number = 1) {
    return this.http.get<any>(
      `${environment.api_base}/person/popular?language=en-US&page=${page}`
    );
  }

  getPersonDetails(id: number) {
    return this.http.get<any>(`${environment.api_base}/person/${id}`);
  }
}

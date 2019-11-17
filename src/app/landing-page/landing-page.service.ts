import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  private apiUrl = 'http://localhost:54198/api/book';

   constructor(private http: HttpClient) { }

   searchBooks(searchTerm: string) {
      searchTerm = searchTerm ? searchTerm : 'all';
      const url = `${this.apiUrl}/filter/${searchTerm}`;
      return this.http.get(url);
   }
}

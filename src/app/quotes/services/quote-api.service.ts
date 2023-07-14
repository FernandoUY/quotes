import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root',
})
export class QuoteApiService {
  private httpClient: HttpClient = inject(HttpClient);
  private baseUrl: string = 'https://quote-garden.onrender.com/api/v3';

  getRandomQuote(): Observable<QuoteResponse> {
    return this.httpClient.get<QuoteResponse>(`${this.baseUrl}/quotes/random`);
  }

  getAllQuotesByAuthor(author: string): Observable<QuoteResponse> {
    return this.httpClient.get<QuoteResponse>(
      `${this.baseUrl}/quotes?author=${author}`
    );
  }
}

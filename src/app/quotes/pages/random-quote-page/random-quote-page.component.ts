import { Component, OnInit, inject } from '@angular/core';
import { QuoteApiService } from '../../services/quote-api.service';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-random-quote-page',
  templateUrl: './random-quote-page.component.html',
  styleUrls: ['./random-quote-page.component.scss'],
})
export class RandomQuotePageComponent implements OnInit {
  private quoteApiService: QuoteApiService = inject(QuoteApiService);
  quote?: Quote;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.quoteApiService.getRandomQuote().subscribe({
      next: ({ data }) => (this.quote = data[0]),
      error: (err) => console.error(err),
      complete: () => (this.isLoading = false),
    });
  }
}

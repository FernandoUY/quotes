import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteApiService } from '../../services/quote-api.service';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-author-quotes-page',
  templateUrl: './author-quotes-page.component.html',
  styleUrls: ['./author-quotes-page.component.scss'],
})
export class AuthorQuotesPageComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private quoteApiService: QuoteApiService = inject(QuoteApiService);
  quotes?: Quote[];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.params.subscribe(({ name }) => {
      this.quoteApiService.getAllQuotesByAuthor(name).subscribe({
        next: (res) => (this.quotes = res.data),
        error: (err) => console.error(err),
        complete: () => (this.isLoading = false),
      });
    });
  }
}

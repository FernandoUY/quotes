import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuotePageComponent } from './pages/random-quote-page/random-quote-page.component';
import { AuthorQuotesPageComponent } from './pages/author-quotes-page/author-quotes-page.component';
import { QuotesLayoutComponent } from './layout/quotes-layout/quotes-layout.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AuthorComponent } from './components/author/author.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RandomQuotePageComponent,
    AuthorQuotesPageComponent,
    QuotesLayoutComponent,
    QuoteComponent,
    AuthorComponent,
  ],
  imports: [CommonModule, QuotesRoutingModule, SharedModule],
})
export class QuotesModule {}

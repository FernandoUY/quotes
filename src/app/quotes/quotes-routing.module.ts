import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomQuotePageComponent } from './pages/random-quote-page/random-quote-page.component';
import { QuotesLayoutComponent } from './layout/quotes-layout/quotes-layout.component';
import { AuthorQuotesPageComponent } from './pages/author-quotes-page/author-quotes-page.component';

export const routes: Routes = [
  {
    path: '',
    component: QuotesLayoutComponent,
    children: [
      {
        path: 'random-quote',
        component: RandomQuotePageComponent,
      },
      {
        path: 'author/:name',
        component: AuthorQuotesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'random-quote',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}

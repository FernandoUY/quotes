import { Component, Input } from '@angular/core';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {
  @Input() author?: Quote;
}

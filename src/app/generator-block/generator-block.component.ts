import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-generator-block',
  templateUrl: './generator-block.component.html',
  styleUrls: ['./generator-block.component.css']
})
export class GeneratorBlockComponent implements OnInit {

  theQuote: {title: string, content: string};
  quotes: {title: string, content: string}[];
  quoteLength: number;

  constructor(private quoteService: QuoteService, private http: HttpClient) { }

  nextQuote() {
    this.theQuote = this.quotes[Math.floor(Math.random() * this.quoteLength)];
  }

  ngOnInit() { // Make the HTTP request:
    this.http.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40?callback=foo').subscribe(data => {
      // Read the result field from the JSON response.
      this.quotes = this.quoteService.formatQuotes(data);
      this.quoteLength = this.quotes.length;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-generator-block',
  templateUrl: './generator-block.component.html',
  styleUrls: ['./generator-block.component.css']
})
export class GeneratorBlockComponent implements OnInit {

  theQuote: string

  constructor(private quoteService: QuoteService) { }

  nextQuote() {
    const quotes = this.quoteService.getQuotes();
    const quoteLength = quotes.length;
    this.theQuote = quotes[Math.floor(Math.random() * quoteLength)];
  }

  ngOnInit() { }

}

import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuotes() {
    const quotes: string[] = [
      'An apple a day keeps the doctor away!',
      'Slow and steady wins the race',
      'Fool me once, shame on you. Fool me twice, shame on me.',
      'Penny wise, pound foolish',
      'Practice makes perfect!',
      'The squeaky wheel gets the grease'
    ];

    return quotes;
  }

  formatQuotes(data) {
    const formattedQuote: {title: string, content: string}[] = [];
    data.forEach((element) => {
      formattedQuote.push({title: element.title, content: element.content});
    });
    return formattedQuote;
  }
}

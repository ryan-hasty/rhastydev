import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  smartQuote: { quote: string, author: string } = { quote: '', author: '' };
  ryanQuote: { quote: string, author: string } = { quote: '', author: '' };

  ryanAuthor = '-Ryan Hasty'


  routeQuotes = {

    '/about': {smartQuote: {quote: '"Sometimes it is the people no one can imagine anything of who do the things no one can imagine."', author: '-Alan Turing'},
      ryanQuote: {quote: '"Sometimes it is me no one can imagine anything of… and they’re right."', author: this.ryanAuthor} },

    '/education': {smartQuote: {quote: '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."', author: '-Martin Fowler'},
      ryanQuote: {quote: '"I write code that only I can understand… until next week."', author: this.ryanAuthor} },

    '/skills': {smartQuote: {quote: '"Software is a great combination of artistry and engineering."', author: '-Bill Gates'},
      ryanQuote: {quote: '"My code is a great combination of trial and error."', author: this.ryanAuthor} },

    '/experience': {smartQuote: {quote: '"Innovation distinguishes between a leader and a follower."', author: '-Steve Jobs'},
      ryanQuote: {quote: '"Sometimes I innovate… by finding new ways to break things."', author: this.ryanAuthor} }
  }

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.setQuotes(this.router.url);
  }

  private setQuotes(route: string): void {

    switch (route) {
      case '/skills':
        const skillsQuotes = this.routeQuotes['/skills'];
        this.smartQuote = skillsQuotes.smartQuote;
        this.ryanQuote = skillsQuotes.ryanQuote;
        break;
      case '/about':
        const aboutQuotes = this.routeQuotes['/about'];
        this.smartQuote = aboutQuotes.smartQuote;
        this.ryanQuote = aboutQuotes.ryanQuote;
        break;
      case '/education':
        const educationQuotes = this.routeQuotes['/education'];
        this.smartQuote = educationQuotes.smartQuote;
        this.ryanQuote = educationQuotes.ryanQuote;
        break;
      case '/experience':
        const experienceQuotes = this.routeQuotes['/experience'];
        this.smartQuote = experienceQuotes.smartQuote;
        this.ryanQuote = experienceQuotes.ryanQuote;
        break;
      default:
        this.smartQuote = { quote: '', author: '' };
        this.ryanQuote = { quote: '', author: '' };
        break;
    }
  }
}

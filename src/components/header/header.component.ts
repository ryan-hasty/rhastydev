import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';
import {QuotesComponent} from '../quotes/quotes.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgForOf,
    NgClass,
    QuotesComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  navItems = [
    {label: 'HOME', route: '/home'},
    {label: 'WHO_AM_I', route: '/about'},
    {label: 'EDUCATION', route: '/education'},
    {label: 'SKILLS', route: '/skills'},
    {label: 'EXPERIENCE', route: '/experience'}
  ]

  currentRoute: string = '';

  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Get the current route immediately
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route; // Compare the current route to the provided one
  }
}

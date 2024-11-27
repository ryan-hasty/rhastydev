import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {EducationComponent} from '../education/education.component';
import {SkillsComponent} from '../skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgForOf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  private routerSubscription: Subscription | undefined;

  navItems = [
    {label: 'HOME', route: '/home'},
    {label: 'WHO_AM_I', route: '/about'},
    {label: 'EDUCATION', route: '/education'},
    {label: 'SKILLS', route: '/skills'},
    {label: 'EXPERIENCE', route: '/experience'}
  ]


  nonCurrentItems: any[] = [];
  isNavigating: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize nonCurrentItems on component load
    this.filterNonCurrentNavItems();

    // Subscribe to router events to track route changes
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.filterNonCurrentNavItems();
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Method to filter out the currently active route
  private filterNonCurrentNavItems(): void {
    this.nonCurrentItems = this.navItems.filter(item => item.route !== this.router.url);
  }

  clearHoverState() {
    this.isNavigating = true;
    setTimeout(() => {
      this.isNavigating = false;
    }, 100);
  }

}

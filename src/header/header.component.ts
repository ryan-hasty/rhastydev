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

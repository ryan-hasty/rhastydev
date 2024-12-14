import { Routes } from '@angular/router';
import {AboutComponent} from '../pages/about/about.component';
import {EducationComponent} from '../pages/education/education.component';
import {SkillsComponent} from '../pages/skills/skills.component';
import {ExperienceComponent} from '../pages/experience/experience.component';

export const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: ExperienceComponent}
];

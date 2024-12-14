import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {HastyCreationsComponent} from '../../components/hasty-creations/hasty-creations.component';

@Component({
  selector: 'app-education',
  imports: [
    HeaderComponent,
    HastyCreationsComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}

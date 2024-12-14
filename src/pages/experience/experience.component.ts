import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {HastyCreationsComponent} from '../../components/hasty-creations/hasty-creations.component';

@Component({
  selector: 'app-experience',
  imports: [
    HeaderComponent,
    HastyCreationsComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}

import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {HastyCreationsComponent} from '../../components/hasty-creations/hasty-creations.component';

@Component({
  selector: 'app-about',
  imports: [
    HeaderComponent,
    HastyCreationsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutDescription1 = 'Hello, I’m a passionate backend developer with a drive for solving challenging problems and building scalable, impactful systems. ' +
    'After spending years in the service industry, I realized I wanted to push myself further and pursue a more technically demanding and rewarding career. ' +
    'That decision led me to development, ' + 'where I’ve found a fulfilling path turning ideas into reality through clean, innovative code.';

  aboutDescription2 = 'Beyond my work, I value the time I spend with family and friends, enjoying great coffee, ' +
    'and diving into personal side projects that let me explore new ideas and technologies. ' +
    'These hobbies keep me inspired and constantly learning.\n' +
    'I approach every project with a commitment to growth, collaboration, and excellence.';
}

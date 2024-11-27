import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {hasty, creations} from '../app/constants';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly creations = creations;
  protected readonly hasty = hasty;
}

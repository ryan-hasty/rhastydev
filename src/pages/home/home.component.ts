import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {hasty, creations, ryanQuote, smartQuote} from '../../app/constants';
import {HastyCreationsComponent} from '../../components/hasty-creations/hasty-creations.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HastyCreationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly ryanQuote = ryanQuote;
  protected readonly smartQuote = smartQuote;
}

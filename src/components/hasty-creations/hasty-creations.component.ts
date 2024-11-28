import { Component } from '@angular/core';
import {creations, hasty} from "../../app/constants";

@Component({
  selector: 'app-hasty-creations',
  imports: [],
  templateUrl: './hasty-creations.component.html',
  styleUrl: './hasty-creations.component.css'
})
export class HastyCreationsComponent {

    protected readonly creationsText = creations;
    protected readonly hastyText = hasty;
}

import { Component } from '@angular/core';
import { EmptyPageComponent } from '@iatec/nephos-pages';

@Component({
  selector: 'app-empety-page',
  standalone: true,
    imports: [
        EmptyPageComponent
    ],
  templateUrl: './empety-page.component.html',
  styleUrl: './empety-page.component.scss'
})
export class EmpetyPageComponent {

}

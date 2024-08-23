import { Component } from '@angular/core';
import { EmptyPageComponent } from '@iatec/nephos-pages';

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [
        EmptyPageComponent
    ],
    templateUrl: './example.component.html'
})
export class ExampleComponent {

}

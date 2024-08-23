import { Component } from '@angular/core';
import { EmptyPageComponent } from '@iatec/nephos-pages';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [
        EmptyPageComponent,
        TranslocoPipe
    ],
    templateUrl: './example.component.html'
})
export class ExampleComponent {

}

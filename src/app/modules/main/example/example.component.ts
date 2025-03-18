import { Component } from '@angular/core';
import { EmptyPageComponent } from '@iatec/nephos-pages';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-example',
    imports: [
        EmptyPageComponent,
        TranslocoPipe
    ],
    templateUrl: './example.component.html'
})
export class ExampleComponent {

}

import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/main/dashboard/dashboard.component';
import { MainTemplateComponent } from './templates/main-template/component/main-template.component';
import { ExampleComponent } from './modules/main/example/example.component';

export const routes: Routes = [
    {
        path: '',
        component: MainTemplateComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'example',
                component: ExampleComponent
            }
        ]
    }
];

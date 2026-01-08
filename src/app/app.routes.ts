import { Routes } from '@angular/router';
import { DashboardComponent } from './features/main/dashboard/dashboard.component';
import { MainTemplateComponent } from './templates/main-template/component/main-template.component';
import { ExampleComponent } from './features/main/example/example.component';

export const routes: Routes = [
    {
        path: '',
        component: MainTemplateComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: {breadcrumb: 'menu.dashboard.example.label'}
            },
            {
                path: 'example',
                component: ExampleComponent,
                data: {breadcrumb: 'menu.example.empty.label'}
            }
        ]
    }
];

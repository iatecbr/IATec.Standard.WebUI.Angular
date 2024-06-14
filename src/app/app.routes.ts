import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/main/dashboard/dashboard.component';
import { MainTemplateComponent } from './templates/main-template/component/main-template.component';
import { EmpetyPageComponent } from './modules/main/empety-page/empety-page.component';

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
                path: 'empty-page',
                component: EmpetyPageComponent
            }
        ]
    }
];

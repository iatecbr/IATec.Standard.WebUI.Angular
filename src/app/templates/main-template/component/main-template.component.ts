import { Component, OnInit } from '@angular/core';
import { LayoutService, NephosLayoutModule } from '@iatec/nephos-layout';
import { LogoComponent } from '../components/logo/logo.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { ProfileSidebarComponent } from '../components/profile-sidebar/profile-sidebar.component';

@Component({
    selector: 'app-main-template',
    standalone: true,
    imports: [
        NephosLayoutModule,
        LogoComponent,
        TopbarComponent,
        ProfileSidebarComponent
    ],
    templateUrl: './main-template.component.html',
    styleUrl: './main-template.component.scss'
})
export class MainTemplateComponent implements OnInit {
    constructor(
        private _layoutService: LayoutService
    ) {
    }

    ngOnInit(): void {
        this._layoutService.config.update(
            (config) => ({
                ...config,
                theme: 'default',
            }));

        this._layoutService.profile.set({name: 'Apostle Paul', urlAvatar: './images/avatar/example.png'});
    }
}

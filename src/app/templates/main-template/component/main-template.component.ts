import { Component, inject, OnInit } from '@angular/core';
import { LayoutComponent, LayoutService } from '@iatec/nephos-layout';
import { LogoComponent } from '../components/logo/logo.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { ProfileSidebarComponent } from '../components/profile-sidebar/profile-sidebar.component';

@Component({
    selector: 'app-main-template',
    imports: [
        LogoComponent,
        TopbarComponent,
        ProfileSidebarComponent,
        LayoutComponent
    ],
    templateUrl: './main-template.component.html'
})
export class MainTemplateComponent implements OnInit {
    private _layoutService = inject(LayoutService);

    ngOnInit(): void {
        this._layoutService.layoutConfig.update(
            (config) => ({
                ...config,
                primary: 'indigo',
                menuMode: 'static',
            }));

        this._layoutService.profile.set({name: 'Apostle Paul', urlAvatar: './images/avatar/example.png'});
    }
}

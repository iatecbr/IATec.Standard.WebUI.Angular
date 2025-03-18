import { Component, effect, inject } from '@angular/core';
import {
    LayoutService,
    ProfileSidebarBlockComponent,
    ProfileSidebarBlockItemComponent,
    ProfileSidebarBlockSubtitleComponent,
    ProfileSidebarBlockTitleComponent
} from '@iatec/nephos-layout';

@Component({
    selector: 'app-main-template-profile-sidebar',
    imports: [
        ProfileSidebarBlockComponent,
        ProfileSidebarBlockItemComponent,
        ProfileSidebarBlockTitleComponent,
        ProfileSidebarBlockSubtitleComponent
    ],
    templateUrl: './profile-sidebar.component.html'
})
export class ProfileSidebarComponent {
    private _layoutService = inject(LayoutService);
    name: string | undefined;

    constructor() {
        effect(() => {
            const profile = this._layoutService.profile();
            this.name = profile.name;
        });
    }

    onCommentClick() {
        console.log('Comment clicked');
    }

    onProfileClick() {
        console.log('Profile clicked');
    }

    onSignOutClick() {
        console.log('SignOut clicked');
    }
}

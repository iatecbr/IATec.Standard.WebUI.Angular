import { Component, inject } from '@angular/core';
import {
    LayoutService,
    ProfileSidebarBlockComponent,
    ProfileSidebarBlockItemComponent,
    ProfileSidebarBlockSubtitleComponent,
    ProfileSidebarBlockTitleComponent,

} from '@iatec/nephos-layout';
import { Badge } from 'primeng/badge';

@Component({
    selector: 'app-main-template-profile-sidebar',
    imports: [
        ProfileSidebarBlockComponent,
        ProfileSidebarBlockItemComponent,
        ProfileSidebarBlockSubtitleComponent,
        ProfileSidebarBlockTitleComponent,
        Badge
    ],
    templateUrl: './profile-sidebar.component.html'
})
export class ProfileSidebarComponent {
    public layoutService = inject(LayoutService);

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

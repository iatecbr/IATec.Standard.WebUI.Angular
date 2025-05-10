import { Component, HostBinding, OnInit } from '@angular/core';
import { LanguageComponent, LanguageModel, MenuService, UserAppModel, UserAppsComponent } from '@iatec/nephos-layout';
import { forkJoin } from 'rxjs';
import { HttpAppService, HttpLanguageService, HttpMenuService } from '../../../../core/services';
import { TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-main-template-topbar',
    imports: [
        LanguageComponent,
        UserAppsComponent
    ],
    templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
    @HostBinding('class') class = `flex`;

    apps: UserAppModel[] = [];

    languages: LanguageModel[] = [];
    selectedLanguage: LanguageModel | undefined;

    constructor(
        private _menuService: MenuService,
        private _httpMenuService: HttpMenuService,
        private _languageService: HttpLanguageService,
        private _translateService: TranslocoService,
        private _appsService: HttpAppService
    ) {
    }

    ngOnInit(): void {
        this._getDependencies();
    }

    public afterChangeLanguage(language: LanguageModel | undefined): void {
        if (language) {
            localStorage.setItem('lang', `${language.code}-${language.country.code}`);
            this._translateService.setActiveLang(`${language.code}-${language.country.code}`);
        }
    }

    private _getDependencies() {
        forkJoin([
            this._httpMenuService.getMenus(),
            this._languageService.getLanguages(),
            this._appsService.getApps()
        ]).subscribe(([menus, languages, apps]) => {
            this._menuService.menus = menus;
            this.languages = languages;
            this.apps = apps;

            this._afterGetLanguages();
        });
    }

    private _afterGetLanguages(): void {
        const lang = localStorage.getItem('lang') || 'en-US';

        this._translateService.setAvailableLangs(this.languages.map(x => `${x.code}-${x.country.code}`));

        this.selectedLanguage = this.languages.find(x => x.code === lang?.split('-')[0]
            && x.country.code === lang?.split('-')[1]) || this.languages[0];

        if (this.selectedLanguage) {
            localStorage.setItem('lang', `${this.selectedLanguage.code}-${this.selectedLanguage.country.code}`);
        }
    }
}

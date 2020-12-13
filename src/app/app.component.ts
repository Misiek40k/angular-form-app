import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private translate: TranslateService
    ) {}

    ngOnInit(): void {
        const browserLang = this.translate.getBrowserLang();
        const currentLanguage = browserLang.match(/pl/) ? 'pl' : 'en';
        this.document.documentElement.lang = currentLanguage;
        this.translate.setDefaultLang(currentLanguage);
    }
}

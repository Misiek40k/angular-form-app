import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    brandIcon: IconProp = 'clipboard-list';

    isNavbarCollapsed = true;

    constructor(
        protected translate: TranslateModule
    ) { }

    ngOnInit(): void { }
}

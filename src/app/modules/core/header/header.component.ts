import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    brandIcon: IconProp = 'clipboard-list';

    isNavbarCollapsed = true;

    constructor() { }

    ngOnInit(): void { }
}

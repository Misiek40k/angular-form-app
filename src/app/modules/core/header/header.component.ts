import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isNavbarCollapsed = true;

    brandIcon: IconProp = 'clipboard-list'

    constructor() { }

    ngOnInit(): void { }
}

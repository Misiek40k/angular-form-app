import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faClipboardList);
    }
}

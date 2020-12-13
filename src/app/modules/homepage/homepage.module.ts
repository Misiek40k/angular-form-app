import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }
];

@NgModule({
    declarations: [HomepageComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class HomepageModule {}

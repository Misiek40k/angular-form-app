import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FormComponent
            },
            {
                path: 'summary',
                component: SummaryComponent
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    declarations:
        [
            FormComponent,
            SummaryComponent
        ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ]
})
export class FormModule {}

import { Component, OnInit } from '@angular/core';
import { Data } from '../../../models/data';
import { CookieName, FormService } from '../../../services/form.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

    formData: Data;

    constructor(
        private formService: FormService
    ) { }

    ngOnInit(): void {
        this.updateModel();
    }

    updateModel(): void {
        this.formService.getFormData(CookieName.formData)
            .subscribe(formData => {
                this.formData = formData;
            });
    }
}

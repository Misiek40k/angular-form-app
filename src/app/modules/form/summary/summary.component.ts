import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { CookieName } from '../../../services/data-holder.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

    constructor(
        private formService: FormService
    ) { }

    ngOnInit(): void {
        this.formService.getFormData(CookieName.formData)
            .subscribe(formData => {
                console.log(formData);
            });
    }

}

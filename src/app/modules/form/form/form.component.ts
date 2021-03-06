import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CookieName, FormService } from '../../../services/form.service';
import { Data } from '../../../models/data';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    formData: Data;

    nameControl = new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
    ]);
    surnameControl = new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
    ]);
    ageControl = new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]*$/)
    ]);

    constructor(
        private translate: TranslateService,
        private formService: FormService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.updateModel();
    }

    updateModel(): void {
        this.formService.getFormData(CookieName.formData)
            .subscribe(formData => {
                this.formData = formData;
                this.updateView();
            });
    }

    updateView(): void {
        this.nameControl.setValue(this.formData.name);
        this.surnameControl.setValue(this.formData.surname);
        this.ageControl.setValue(this.formData.age);
    }

    isHelloStripeVisible(): boolean {
        return this.nameControl.value && !this.nameControl.errors && this.surnameControl.value && !this.surnameControl.errors;
    }

    //Validators

    getNameControlErrorMessage(): string {
        if (this.nameControl.hasError('required')) {
            return this.translate.instant('FORM.emptyNameControlError');
        } else if (this.nameControl.hasError('pattern')) {
            return this.translate.instant('FORM.digitsNameControlError');
        }
    }

    getSurnameControlErrorMessage(): string {
        if (this.surnameControl.hasError('required')) {
            return this.translate.instant('FORM.emptySurnameControlError');
        } else if (this.surnameControl.hasError('pattern')) {
            return this.translate.instant('FORM.digitsSurnameControlError');
        }
    }

    getAgeControlErrorMessage(): string {
        if (this.ageControl.hasError('required')) {
            return this.translate.instant('FORM.emptyAgeControlError');
        } else if (this.ageControl.hasError('pattern')) {
            return this.translate.instant('FORM.lettersAgeControlError');
        }
    }

    isFormCorrect(): boolean {
        this.nameControl.markAsDirty();
        this.surnameControl.markAsDirty();
        this.ageControl.markAsDirty();

        return !(this.nameControl.errors || this.surnameControl.errors || this.ageControl.errors);
    }

    didSaveButtonClick(): void {
        if (!this.isFormCorrect()) { return; }

        const data: Data = {
            name: this.nameControl.value,
            surname: this.surnameControl.value,
            age: Number(this.ageControl.value)
        };

        this.formService.setFormData(CookieName.formData, data, 0)
            .subscribe(() => {
                this.router.navigate(['/form/summary']);
            });
    }
}

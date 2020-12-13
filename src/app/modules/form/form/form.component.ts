import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormService } from '../../../services/form.service';
import { Data } from '../../../models/data';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    nameControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)
    ]);
    surnameControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)
    ]);
    ageControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]+$/)
    ]);

    constructor(
        private translate: TranslateService,
        private formService: FormService
    ) { }

    ngOnInit(): void { }

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
        this.nameControl.markAsTouched();
        this.surnameControl.markAsTouched();
        this.ageControl.markAsTouched();

        return !(this.nameControl.errors || this.surnameControl.errors || this.ageControl.errors);
    }

    didSaveButtonClick(): void {
        if (!this.isFormCorrect()) { return; }

        const data: Data = {
            name: this.nameControl.value,
            surname: this.surnameControl.value,
            age: this.ageControl.value
        }
    }
}

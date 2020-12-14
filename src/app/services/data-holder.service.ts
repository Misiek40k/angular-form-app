import { Injectable } from '@angular/core';
import { FormService } from './form.service';

export enum CookieName {
    formData = 'formData'
}

@Injectable({
    providedIn: 'root'
})
export class DataHolderService {

    constructor(
        private formService: FormService
    ) { }
}

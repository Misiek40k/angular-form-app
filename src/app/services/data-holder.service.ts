import { Injectable } from '@angular/core';
import { FormService } from './form.service';

@Injectable({
    providedIn: 'root'
})
export class DataHolderService {

    constructor(
        private formService: FormService
    ) { }
}

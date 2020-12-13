import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Data } from '../models/data';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private storage: StorageMap
    ) { }
}

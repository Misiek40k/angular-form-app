import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Data } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private cookieService: CookieService
    ) { }

    getFormData(cookieName: string): Observable<Data> {
        return new Observable<Data>(subscriber => {
            const jsonString: string = this.cookieService.get(cookieName);
            const dataObject: Data = JSON.parse(jsonString);
            subscriber.next(dataObject)
        });
    }

    setFormData(cookieName: string, data: Data, expirationTime: number): Observable<boolean> {
        const jsonString = JSON.stringify(data);

        return new Observable<boolean>(subscriber => {
            this.cookieService.set(cookieName, jsonString, expirationTime);
            subscriber.next(true);
        });
    }
}

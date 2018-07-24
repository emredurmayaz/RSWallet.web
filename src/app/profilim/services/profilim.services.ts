import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfilimService {

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get('assets/mock-data/profilim.json').map(
            (a) => {
                const result = a.json();
                return result.data;
            }
        );
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SiparisService {

  constructor(private http: Http) { }

  get(): any {
    return this.http.get('assets/mock-data/siparis.json').map(
      (res) => {
        const result = res.json();
        return result.data;
      }
    );
  }
}

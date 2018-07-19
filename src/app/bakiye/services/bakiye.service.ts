import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BakiyeService {

  constructor(private http: Http) { }

  get(): Observable<any> {
    return this.http.get('assets/mock-data/bakiye.json').map(
      (res) => {
        const result = res.json();
        return result.data;
      }
    );
  }
}

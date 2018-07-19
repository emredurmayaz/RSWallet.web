import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(public http: Http) { }

  get(): Observable<any> {
    return this.http.get('assets/mock-data/GecmisSiparis.json').map((res) => {
      return res.json();
    });
  }
}

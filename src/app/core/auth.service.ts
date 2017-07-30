import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

    send(car): Observable<any> {
    console.log('ok');
    var abc = {"ab":car};
    return this.http.post('http://localhost:3000/api/tk1/addcar', abc,this.options);
  }
}

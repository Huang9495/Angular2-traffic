import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';
import * as io from "socket.io-client";

@Injectable()
export class AuthService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http , private socket: Socket) { }

    send(car): Observable<any> {
      console.log('ok');
      var abc = {"ab":car};
      return this.http.post('http://localhost:3000/api/tk1/addcar', abc,this.options);
    }

    sendMessage(msg: string){
        console.log('222222222222222');
        this.socket.emit("message", msg);

    }
}

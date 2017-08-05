import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Component, OnInit, Inject } from '@angular/core';

import { AuthService } from './core/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(@Inject('auth') private service) {
  }
  ngOnInit(){
  }

  car = "";
  msg : string;

   onClick(car) {
   console.log(car);
   this.service.send(car).subscribe(
   data =>{
   console.log(data);
   }, 
   error => console.log(error));
   }

   sendMsg(msg){
   console.log('1111111111111111111111');
   console.log(msg);
   this.service.sendMessage(msg);
  }

}



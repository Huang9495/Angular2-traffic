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
  car = "";
  ngOnInit(): void {
  }

  constructor(@Inject('auth') private service) {
  }

   onClick(car) {
   console.log(car);
   this.service.send(car).subscribe(
   data =>{
   console.log(data);
   }, 
   error => console.log(error));
   }

}




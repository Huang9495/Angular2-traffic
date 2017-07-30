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

  constructor(private service: AuthService) {
  }

 onClick(car) {
 console.log(car);
 this.AuthService.send(car).subscribe(
 data => {
 alert('ok');}, 
 error => console.log(error));
 }
}




import { NgModule,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig,Socket } from 'ng-socket-io';

import { AuthService } from './core/auth.service';

import { AppComponent } from './app.component';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config) ,
  ],
  providers: [{provide: 'auth',  useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }


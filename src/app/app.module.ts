import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccountModule} from "./account/account.module";
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule,
        AccountModule,
        UserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

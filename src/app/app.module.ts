import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {UserModule} from "./user/user.module";
import {AccountModule} from "./account/account.module";
import {UserService} from "./user/user.service";
import {AccountService} from "./account/account.service";
import {AuthGuard} from "./common/AuthGuard"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [UserService, AccountService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

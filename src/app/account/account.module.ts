import { NgModule } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountComponent } from './account/account.component';
import {MatTableModule} from "@angular/material/table";
import {AccountRoutingModule} from "./account-routing.module";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AccountListComponent,
    AccountCreateComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    AccountRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }

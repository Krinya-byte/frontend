import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountComponent} from "./account/account.component";
import {AccountCreateComponent} from "./account-create/account-create.component";
import {AuthGuard} from "../common/AuthGuard";

const routes: Routes = [
  {path:'', redirectTo:'list/:userName', pathMatch: "full"},
  {
    path: 'list/:userName',
    component: AccountListComponent,
   canActivate:[AuthGuard]
  },
  {path: ':itemName', component: AccountComponent, canActivate:[AuthGuard]},
  {path: 'create/:userName', component: AccountCreateComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountComponent} from "./account/account.component";
import {AccountCreateComponent} from "./account-create/account-create.component";

const routes: Routes = [
  //{path:'', redirectTo:'accounts', pathMatch: "full"},
  {path: ':userName/accounts', component: AccountListComponent},
  {path: ':userName/account/:id', component: AccountComponent},
  {path: ':userName/create', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}

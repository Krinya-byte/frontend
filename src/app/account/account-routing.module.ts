import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountComponent} from "./account/account.component";
import {AccountCreateComponent} from "./account-create/account-create.component";

const routes: Routes = [
  {path:'', redirectTo:'list/:userName', pathMatch: "full"},
  {
    path: 'list/:userName',
    component: AccountListComponent,
    children: [
      // {path: 'show/:id', component: AccountComponent},
      // {path: 'create', component: AccountCreateComponent}
    ]
  },
  {path: ':itemName', component: AccountComponent},
  {path: 'create/:userName', component: AccountCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}

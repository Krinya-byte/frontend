import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from "./user/user.module";
import {AccountModule} from "./account/account.module";

const routes: Routes = [
  {path: 'user', loadChildren: () => UserModule},
  {path: 'account', loadChildren: () => AccountModule},
  {path: '', redirectTo: "user", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

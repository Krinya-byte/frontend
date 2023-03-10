import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from "./user/user.module";
import {AccountModule} from "./account/account.module";
import {AuthGuard} from "./common/AuthGuard";

const routes: Routes = [
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => UserModule)},
  {path: 'account', loadChildren: () =>  import('./account/account.module').then(m => AccountModule) , canActivate:[AuthGuard]},
  {path: '', redirectTo: "user", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

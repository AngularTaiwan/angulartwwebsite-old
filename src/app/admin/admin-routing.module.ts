import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {MaintainComponent} from './maintain/maintain.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'maintain', canActivate: [AuthGuard], component: MaintainComponent}
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class AdminRoutingModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {ShareModule} from './../share/share.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminService} from './admin.service';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {MaintainComponent} from './maintain/maintain.component';


@NgModule({
  imports: [ShareModule, AdminRoutingModule, AngularFireAuthModule],
  declarations: [LoginComponent, MaintainComponent],
  providers: [AdminService, AuthGuard]
})
export class AdminModule {
}

import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ActivitityMaintainDetailComponent} from './activitity-maintain-detail/activitity-maintain-detail.component';
import {ActivityMaintainComponent} from './activity-maintain/activity-maintain.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {MaintainComponent} from './maintain/maintain.component';
import {StudyMaintainDetailComponent} from './study-maintain-detail/study-maintain-detail.component';
import {StudyMaintainComponent} from './study-maintain/study-maintain.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, {
    path: 'maintain',
    component: MaintainComponent,
    children: [
      {path: 'study', component: StudyMaintainComponent},
      {path: 'study/:id', component: StudyMaintainDetailComponent},
      {path: 'activity', component: ActivityMaintainComponent},
      {path: 'activity/:id', component: ActivitityMaintainDetailComponent},
      {path: '', redirectTo: '/admin/maintain/study', pathMatch: 'full'}
    ]
  }
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class AdminRoutingModule {
}

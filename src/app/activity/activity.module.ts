import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {ActivityRoutingModule} from './activity-routing.module';
import { ActivityComponent } from './activity/activity.component';

@NgModule({imports: [ShareModule, ActivityRoutingModule], declarations: [ActivityComponent]})
export class ActivityModule {
}

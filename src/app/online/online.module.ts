import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {OnlineRoutingModule} from './online-routing.module';
import {OnlineComponent} from './online/online.component';

@NgModule({
  imports: [ShareModule, OnlineRoutingModule],
  declarations: [OnlineComponent]
})
export class OnlineModule {
}

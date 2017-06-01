import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ShareModule} from './../share/share.module';
import {EventHeader2017Component} from './event2017/event-header2017.component';
import {Event2017Component} from './event2017/event2017.component';

@NgModule({
  imports: [ShareModule, RouterModule],
  declarations: [Event2017Component, EventHeader2017Component],
  entryComponents: [Event2017Component, EventHeader2017Component]
})
export class EventModule {
}

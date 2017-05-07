import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {Event2017Component} from './event2017/event2017.component';

@NgModule({
  imports: [ShareModule],
  declarations: [Event2017Component],
  entryComponents: [Event2017Component]
})
export class EventModule {
}

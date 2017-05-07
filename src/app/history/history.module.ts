import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history/history.component';

@NgModule({
  imports: [ShareModule, HistoryRoutingModule],
  declarations: [HistoryComponent]
})
export class HistoryModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about/about.component';

@NgModule({
  imports: [ShareModule, AboutRoutingModule],
  declarations: [AboutComponent]
})
export class AboutModule {
}

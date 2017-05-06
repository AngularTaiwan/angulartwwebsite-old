import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {StudyRoutingModule} from './study-routing.module';
import {StudyResolver} from './study.resolver';
import {StudyComponent} from './study/study.component';

@NgModule({
  imports: [CommonModule, StudyRoutingModule],
  providers: [StudyResolver],
  declarations: [StudyComponent]
})
export class StudyModule {
}

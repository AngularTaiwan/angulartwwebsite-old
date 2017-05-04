import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { StudyComponent } from './study/study.component';

@NgModule({
  imports: [
    CommonModule,
    StudyRoutingModule
  ],
  declarations: [StudyComponent]
})
export class StudyModule { }

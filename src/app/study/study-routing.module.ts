import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StudyComponent} from './study/study.component';

const routes: Routes = [{path: '', component: StudyComponent}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class StudyRoutingModule {
}

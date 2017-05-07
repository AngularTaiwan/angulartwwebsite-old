import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StudyResolver} from './study.resolver';
import {StudyComponent} from './study/study.component';

const routes: Routes =
    [{path: '', component: StudyComponent, resolve: {items: StudyResolver}}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class StudyRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: MainComponent},
      {path: 'about', loadChildren: 'app/about/about.module#AboutModule'}, {
        path: 'activity',
        loadChildren: 'app/activity/activity.module#ActivityModule'
      },
      {
        path: 'history',
        loadChildren: 'app/history/history.module#HistoryModule'
      },
      {path: 'study', loadChildren: 'app/study/study.module#StudyModule'},
      {path: 'online', loadChildren: 'app/online/online.module#OnlineModule'}
    ]
  },
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../../environments/environment';

import {AfService} from './af.service';


@NgModule({
  imports: [
    CommonModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AfService]
})
export class CoreModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule, AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: []
})
export class CoreModule {
}

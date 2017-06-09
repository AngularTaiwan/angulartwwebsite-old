import {ApplicationRef, InjectionToken, Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';

import {environment} from './../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {EventModule} from './event/event.module';
import {MainModule} from './main/main.module';
import {ShareModule} from './share/share.module';

/*這是一個測試*/
export const eventConfig = new InjectionToken('eventConfig');



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareModule, CoreModule, AppRoutingModule, MainModule, EventModule],
  providers: [{provide: eventConfig, useValue: environment.eventConfig}],
  entryComponents: [AppComponent]
})
export class AppModule {
  eventConfig: any;
  constructor(private router: Router, private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    if (environment.eventConfig.showEventPage) {
      this.router.resetConfig([{path: '', component: environment.eventConfig.component}]);
    }
    this.appRef.bootstrap(AppComponent);
  }
}

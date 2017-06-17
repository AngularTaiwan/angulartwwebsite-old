import 'rxjs/add/operator/first';

import {ApplicationRef, enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Subscription} from 'rxjs/Subscription';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {FirebaseConfig} from './environments/firebaseConfig';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  window['appscript']();
  if (environment.production && 'serviceWorker' in <any>navigator) {
    const appRef: ApplicationRef = ref.injector.get(ApplicationRef);
    appRef.isStable.first().subscribe(() => {
      (navigator as any)
          .serviceWorker.register('/service-worker.js')
          .then(function(registration) {
            console.log('Service Worker registered');
          })
          .catch(function(err) {
            console.log('Service Worker registration failed: ', err);
          });
    })
  }
});

import {Event2017Component} from './../app/event/event2017/event2017.component';
import {EventConfig} from './eventConfig';
// The file contents for the current environment will overwrite these during
// build. The build system defaults to the dev environment which uses
// `environment.ts`, but if you do `ng build --env=prod` then
// `environment.prod.ts` will be used instead. The list of which env maps to
// which file can be found in `.angular-cli.json`.
import {FirebaseConfig} from './firebaseConfig';

export const environment = {
  production: false,
  firebaseConfig: FirebaseConfig,
  eventConfig: EventConfig
};

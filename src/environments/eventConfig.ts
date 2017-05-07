import {Component} from '@angular/core';

import {Event2017Component} from './../app/event/event2017/event2017.component';

export const EventConfig: IEventConfig = {
  showEventPage: true,
  component: Event2017Component
}

export interface IEventConfig {
  showEventPage: boolean, component: any
}

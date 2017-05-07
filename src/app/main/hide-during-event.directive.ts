import {Directive, Injector, TemplateRef, ViewContainerRef} from '@angular/core';
import {IEventConfig} from 'environments/eventConfig';
import {eventConfig} from './../app.module';

@Directive({selector: '[augtHideDuringEvent]'})
export class HideDuringEventDirective {
  eventConfig: IEventConfig;
  constructor(
      private viewRef: ViewContainerRef, private tempRef: TemplateRef<any>,
      private injector: Injector) {
    this.eventConfig = this.injector.get(eventConfig) as IEventConfig;
    this.viewRef.clear();
    if (!this.eventConfig.showEventPage) {
      this.viewRef.createEmbeddedView(this.tempRef);
    }
  }
}

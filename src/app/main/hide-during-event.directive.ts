import {Directive, Injector, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {IEventConfig} from 'environments/eventConfig';

import {eventConfig} from './../app.module';

@Directive({selector: '[augtHideDuringEvent]'})
export class HideDuringEventDirective implements OnInit {
  @Input() augtHideDuringEvent;

  eventConfig: IEventConfig;
  constructor(
      private viewRef: ViewContainerRef, private tempRef: TemplateRef<any>,
      private injector: Injector) {
    this.eventConfig = this.injector.get(eventConfig) as IEventConfig;
    this.viewRef.clear();
  }

  ngOnInit() {
    this.augtHideDuringEvent = this.augtHideDuringEvent === null ? true : this.augtHideDuringEvent;
    if (!this.eventConfig.showEventPage === this.augtHideDuringEvent) {
      this.viewRef.createEmbeddedView(this.tempRef);
    }
  }
}

import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[augtAdHost]'})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

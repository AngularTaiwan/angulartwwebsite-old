import {AfterViewInit, Component, ComponentFactoryResolver, Injector, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AdDirective} from 'app/main/ad.directive';
import {environment} from 'environments/environment';

@Component({
  selector: 'augt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}
  ngAfterViewInit() {
    if (environment.eventConfig.showEventPage) {
      const componentFactory =
          this._componentFactoryResolver.resolveComponentFactory(environment.eventConfig.header);
      console.log(this.adHosts);
      if (this.adHosts) {
        this.adHosts.forEach(item => {
          item.viewContainerRef.clear();
          item.viewContainerRef.createComponent(componentFactory);
        });
      }
    }
  }
}

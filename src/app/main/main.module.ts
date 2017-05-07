import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ShareModule} from './../share/share.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import { HideDuringEventDirective } from './hide-during-event.directive';

@NgModule({
  imports: [ShareModule, RouterModule],
  declarations: [MainComponent, FooterComponent, HeaderComponent, HideDuringEventDirective],
  exports: [MainComponent, FooterComponent, HeaderComponent]
})
export class MainModule {
}

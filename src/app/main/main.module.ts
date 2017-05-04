import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShareModule} from './../share/share.module';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main/main.component';

@NgModule(
    {imports: [ShareModule, MainRoutingModule], declarations: [MainComponent]})
export class MainModule {
}

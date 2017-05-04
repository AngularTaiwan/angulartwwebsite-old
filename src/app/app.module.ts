import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {ShareModule} from './share/share.module';

@NgModule({
  declarations: [AppComponent],
  imports:
      [BrowserModule, ShareModule, CoreModule, AppRoutingModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

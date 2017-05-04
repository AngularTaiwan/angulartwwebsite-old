import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ContactComponent} from './contact/contact.component';
import {PhotosComponent} from './photos/photos.component';
import {SquadComponent} from './squad/squad.component';

@NgModule({
  declarations: [ContactComponent, SquadComponent, PhotosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  exports: [
    CommonModule, FormsModule, HttpModule, ContactComponent, SquadComponent,
    PhotosComponent
  ]
})
export class ShareModule {
}

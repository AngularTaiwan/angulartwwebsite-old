import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CustomFormsModule} from 'ng2-validation';

import {ContactComponent} from './contact/contact.component';
import {PhotosComponent} from './photos/photos.component';
import {SquadComponent} from './squad/squad.component';

@NgModule({
  declarations: [ContactComponent, SquadComponent, PhotosComponent],
  imports: [CommonModule, FormsModule, HttpModule, CustomFormsModule],
  exports: [
    CommonModule, FormsModule, HttpModule, CustomFormsModule, ContactComponent,
    SquadComponent, PhotosComponent
  ]
})
export class ShareModule {
}

import {Component, HostListener, Injector, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

declare var smoothScroll: any;
@Component({
  selector: 'augt-event-header2017',
  templateUrl: './event-header2017.component.html',
  styleUrls: ['./event-header2017.component.scss'],
})
export class EventHeader2017Component implements OnInit {
  private document: Document;
  constructor(private injector: Injector) {
    smoothScroll.init();
    this.document = this.injector.get(DOCUMENT);
  }

  ngOnInit() {}

  close_menu() {
    const items = this.document.getElementsByClassName('menu-mobile');
    if (items.length >= 1) {
      items[0].classList.remove('active');
    }
  }
}

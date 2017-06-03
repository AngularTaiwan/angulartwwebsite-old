import {Component, HostListener, OnInit} from '@angular/core';
declare var smoothScroll: any;
@Component({
  selector: 'augt-event-header2017',
  templateUrl: './event-header2017.component.html',
  styleUrls: ['./event-header2017.component.scss'],
})
export class EventHeader2017Component implements OnInit {
  constructor() {
    smoothScroll.init();
  }

  ngOnInit() {}
}

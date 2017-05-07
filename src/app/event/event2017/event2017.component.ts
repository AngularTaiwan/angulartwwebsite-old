import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'augt-event-2017',
  templateUrl: './event2017.component.html',
  styleUrls: ['./event2017.component.scss']
})
export class Event2017Component implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Angular Taiwan 2017 | Angular User Group Taiwan');
  }

  ngOnInit() {}
}

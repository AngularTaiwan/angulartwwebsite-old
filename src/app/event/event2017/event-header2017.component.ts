import {Component, Directive, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'augt-event-header2017',
  templateUrl: './event-header2017.component.html',
  styleUrls: ['./event-header2017.component.scss'],
})
export class EventHeader2017Component implements OnInit {
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        }
      }
    });
  }

  ngOnInit() {}
}

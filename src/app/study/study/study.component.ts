import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {StudyDetail} from './../../admin/study-maintain-detail/study-detail.model';

@Component({
  selector: 'augt-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
  items: StudyDetail[] = [];
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.items = data.items;
    });
  }

  ngOnInit() {}
}

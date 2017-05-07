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

  /**
   * 取得Youtube影片縮圖
   * url:https://youtu.be/HoEB_9TYe70
   */
  getThumbnail(url): string {
    if (!url) return '';
    const videoId = url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
}

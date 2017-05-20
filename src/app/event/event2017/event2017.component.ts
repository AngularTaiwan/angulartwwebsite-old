import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'augt-event-2017',
  templateUrl: './event2017.component.html',
  styleUrls: ['./event2017.component.scss']
})
export class Event2017Component implements OnInit {
  title: string = 'Angular Taiwan 2017';
  description: string =
      `Angular從Beta到正式，一直到現在的四版，也差不多有一年多的時間。這一年來，每個人在學習Angular的旅程上，不論是自己的小專案，或是公司的案子上，多少會遇到一些讓人無法忘記的痛苦經驗，或是解開成就的喜悅感。這次的活動，我們邀請大家來分享這一年來學習Angular的心得，內容也會很精彩，不能錯過!`;

  speakers: ISpeaker[] = [
    {
      name: '洪名辰',
      description:
          `第 8 屆 iT 邦幫忙鐵人賽 Modern Web 組冠軍 - 30 天精通 RxJS，默默無名的少年魔法師，常出現在魔法師大會中，專注於前端的相關法術。`,
      photo: 'assets/img/events/2017/jerryHong.jpg'
    },
    {
      name: 'Sam',
      description:
          `任職於神腦國際，原本為後端開發者，喜歡物件導向，因為 TypeScript 與 Angular 的優雅而瘋狂愛上，目前與團隊使用 Angular 作為前端開發。`,
      photo: 'assets/img/events/2017/sam.jpg'
    },
    {
      name: 'Haru',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/img1.jpg'
    },
    {
      name: 'Jimmy ho',
      description: `是一個什麼都要碰的打雜工程師`,
      photo: 'assets/img/events/2017/jimmy.jpg'
    },
    {
      name: 'Jeff',
      description:
          `任職於多奇數位創意，酷奇教育訓練 Angular 實作課程教練，擁有一年又過三個月的 Angular 2+ 開發經驗，預計再三年將學會火球術(?)的熱血前端開發者`,
      photo: 'assets/img/events/2017/jeff.jpg'
    },
    {
      name: '拉拉醬',
      description:
          `三竹資訊 技術部前端工程師。曾任職過全端網頁工程師、iOS App Developer，目前正享受開發前端的樂趣。`,
      photo: 'assets/img/events/2017/lala.jpg'
    },
    {
      name: 'Will 保哥',
      description:
          `多奇數位創意有限公司技術總監。連續 10 年榮獲選微軟最有價值專家。熟悉各式 Web 前後端開發技術。`,
      photo: 'assets/img/events/2017/will.jpg'
    }
  ];
  constructor(private Title: Title, private meta: Meta) {
    this.Title.setTitle(`${this.title} | Angular User Group Taiwan`);
    this.meta.addTags([
      {property: 'og:url', content: 'https://angular.tw'}, {property: 'og:type', content: 'event'},
      {property: 'og:title', content: this.title},
      {property: 'og:description', content: this.description},
      {property: 'og:image', content: 'Good Morning Harwood'}
    ]);
  }

  ngOnInit() {}
}

interface ISpeaker {
  name: string;
  description: string;
  photo: string
}

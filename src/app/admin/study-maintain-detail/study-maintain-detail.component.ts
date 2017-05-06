import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {AdminService} from './../admin.service';
import {StudyDetail} from './study-detail.model';

@Component({
  selector: 'augt-study-maintain-detail',
  templateUrl: './study-maintain-detail.component.html',
  styleUrls: ['./study-maintain-detail.component.scss']
})
export class StudyMaintainDetailComponent implements OnInit, OnDestroy {
  item: StudyDetail =
      <StudyDetail>{title: '', speaker: '', description: '', youtube: ''};
  isEdit: boolean;

  paramsSub: Subscription
  constructor(
      private route: ActivatedRoute, private router: Router,
      private adminService: AdminService) {
    this.paramsSub =
        this.route.params
            .switchMap(params => this.adminService.getStudy(params['id']))
            .do((data:any) => {
              this.isEdit = data.$value !== null
            })
            .subscribe(data => {
              this.item = this.isEdit ? data : this.initItem();
            });
  }

  initItem(): StudyDetail {
    return <StudyDetail>{title: '', speaker: '', description: '', youtube: '', updateDate: new Date()};
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  save() {
    if (this.isEdit) {
      this.adminService.saveStudy(this.route.snapshot.params['id'], this.item)
          .then(() => {
            this.back();
          });
    } else {
      this.adminService.createStudy(this.item).then(() => {
        this.back();
      })
    }
  }

  back() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

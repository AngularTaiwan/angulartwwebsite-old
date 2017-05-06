import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {StudyDetail} from './../admin/study-maintain-detail/study-detail.model';
import {AfService} from './../core/af.service';

@Injectable()
export class StudyResolver implements Resolve<StudyDetail[]> {
  constructor(private af: AfService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Promise<StudyDetail[]> {
    return new Promise((resolve, reject) => {
      this.af.loadStudy().subscribe(data => {
        resolve(data);
      }, reject);
    });
  };
}

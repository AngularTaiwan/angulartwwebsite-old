import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {StudyDetail} from './../admin/study-maintain-detail/study-detail.model';

@Injectable()
export class AfService {
  constructor(private af: AngularFireDatabase) {}

  loadStudy(): FirebaseListObservable<StudyDetail[]> {
    return this.af.list('/study');
  }
}

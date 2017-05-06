import 'rxjs/add/observable/from';

import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

import {StudyDetail} from './study-maintain-detail/study-detail.model';

@Injectable()
export class AdminService {
  user: Observable<firebase.User>;
  constructor(private auth: AngularFireAuth, private af: AngularFireDatabase) {
    this.user = auth.authState;
  }

  /**
   * 使用者登入
   */
  login(loginState) {
    const {email, password} = loginState;
    return Observable.from(
        this.auth.auth.signInWithEmailAndPassword(email, password));
  }

  /**
   * 使用者登出
   */
  logout() {
    this.auth.auth.signOut();
  }

  loadStudy(): FirebaseListObservable<StudyDetail[]> {
    return this.af.list('/study');
  }

  getStudy(id): FirebaseObjectObservable<StudyDetail> {
    return this.af.object(`/study/${id}`);
  }
  createStudy(item: StudyDetail) {
    item.updateDate = new Date();
    return this.af.list('/study').push(item);
  }
  saveStudy(key, item: StudyDetail) {
    item.updateDate = new Date();
    return this.af.list('/study').update(key, item);
  }
}

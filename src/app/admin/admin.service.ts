import 'rxjs/add/observable/from';

import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService {
  user: Observable<firebase.User>;
  constructor(private auth: AngularFireAuth) {
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
}

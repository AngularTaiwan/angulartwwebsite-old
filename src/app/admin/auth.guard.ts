import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AdminService} from './admin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean>|Promise<boolean>|boolean {
    return this.adminService.user
        .map(user => {
          return user !== null;
        })
        .do(state => {
          if (!state) {
            this.router.navigate(['/admin']);
          }
        });
  }
}

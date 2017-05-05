import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from './../admin.service';

@Component({
  selector: 'augt-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin']);
  }
}

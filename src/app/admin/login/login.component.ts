import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from './../admin.service';

export interface LoginState {
  email: string
  password: string
}

@Component({
  selector: 'augt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginState: LoginState = {email: 'chgc.tw@gmail.com', password: '982314'};
  errorMessage: string;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.adminService.login(this.loginState)
        .subscribe(
            x => {
              this.router.navigate(['/admin/maintain']);
            },
            err => {
              console.log(err);
              this.errorMessage = err.message;
            });
  }
}

import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { users } from './users'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router) { }

  username : string = ''
  password : string = '';
  authenticate : boolean = false;
  isAdmin : boolean = false;
  loginOutput : string = '';

  ngOnInit(): void {
  }

  checkUsernamePassword(username: string, password: string) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        this.authenticate = true;
        this.isAdmin = users[i].isAdmin;
        break;
      }
    }
  }

  onLoginCick() {

    this.checkUsernamePassword(this.username, this.password);

    if (this.authenticate) {

      if (this.isAdmin) {
        this.router.navigate(['/adminView']);
      }

      else {
        this.router.navigate(['/userView']);
      }

    }
    else {
      this.loginOutput = 'INCORRECT USERNAME OR PASSWORD';
    }
  }

}

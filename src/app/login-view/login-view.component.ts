import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { users } from './users'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginViewComponent implements OnInit {

  constructor() { }

  username = ''
  password = '';
  authenticate = false;
  loginOutput = '';


  ngOnInit(): void {
  }

  checkUsernamePassword(username: string, password: string) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        this.authenticate = true;
        break;
      }
    }
  }

  onLoginCick() {

    this.checkUsernamePassword(this.username, this.password);

    if (this.authenticate) {
      this.loginOutput = 'LOGIN SUCCESSFUL';
    }
    else {
      this.loginOutput = 'INCORRECT USERNAME OR PASSWORD';
    }
  }

}

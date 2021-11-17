import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { Users } from './users'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  // Declaring variables to store current User information
  username : string = ''
  password : string = '';
  authenticate : boolean = false;
  isAdmin : boolean = false;
  loginOutput : string = '';

  ngOnInit(): void {
  }

  // Method to check if Username and password match a stored user.
  checkUsernamePassword(username: string, password: string) {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username == username && Users[i].password == password) {
        this.authenticate = true;
        this.isAdmin = Users[i].isAdmin;
        break;
      }
    }
  }

  // Method that runs whenever the login button is clicked. It will check user credentials then route them to the user's cooresponding page.
  onLoginCick() {

    // Checks credentials by called checkUsernamePassword method.
    this.checkUsernamePassword(this.username, this.password);

    // Checks to see if user was authenticated.
    if (this.authenticate) {

      // If the user is an admin then route user to admin view.
      this.onLogin();
      if (this.isAdmin) {
        this.router.navigate(['/adminView']);
      }

      // Otherwise route user to user view.
      else {
        this.router.navigate(['/userView']);
      }

    }

    // If user wasn't authenticated alert user to incorrect username or password.
    else {
      this.loginOutput = 'INCORRECT USERNAME OR PASSWORD';
    }
  }

  onLogin() {
    this.authService.login();
    console.log("authservice loggedin");
  }

  onLogout() {
    this.authService.logout();
  }

}

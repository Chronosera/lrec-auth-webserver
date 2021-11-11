import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { users } from './users'

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

    // Runs until user is found or for entire array if user insn't found.
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {

        // Sets authenticate to true if user is found.
        this.authenticate = true;
        // Sets the isAdmin boolean to the matched user's
        this.isAdmin = users[i].isAdmin;
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

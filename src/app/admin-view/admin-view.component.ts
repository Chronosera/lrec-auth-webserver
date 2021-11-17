import { Component, OnInit } from '@angular/core';
import { UserObj } from '../login-view/users';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  isAdmin = true;
  user: UserObj;
  constructor() { }

  ngOnInit(): void {
  }

  getUser(user: UserObj) {
    this.user = user;
  }
}

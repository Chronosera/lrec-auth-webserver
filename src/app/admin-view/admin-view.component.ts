import { Component, OnInit } from '@angular/core';
import { UserObj } from '../users';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  isAdmin = true;
  user: UserObj;
  changeduser: UserObj;
  show: boolean;
  constructor () {
    
    
  }

  ngOnInit(): void {
  }

  getUser(user: UserObj) {
    this.user = user;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAdmin = true;
  isLoggedin = false;
  constructor() {
    this.isAdmin = true;
    this.isLoggedin = false;
  }

  ngOnInit(): void {
  }

}

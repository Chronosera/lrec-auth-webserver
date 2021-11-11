import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() isAdmin = false;
  @Input() currentComponent = "";
  constructor(private router: Router, private authService: AuthService) {
    this.isAdmin = true;
  }

  ngOnInit(): void {
  }

  adminViewRoute() {
    this.authService.login();
    this.router.navigate(['/adminView']);
  }
  machineViewRoute() {
    this.authService.login();
    this.router.navigate(['/machineView']);
  }
  quizListRoute() {
    this.router.navigate(['/quizView']);
  }
  machineListRoute() {
    this.router.navigate(['/userView'])
  }

}

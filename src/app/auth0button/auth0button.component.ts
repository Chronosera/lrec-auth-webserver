import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth0button',
  templateUrl: './auth0button.component.html',
  styleUrls: ['./auth0button.component.css']
})

export class Auth0buttonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}

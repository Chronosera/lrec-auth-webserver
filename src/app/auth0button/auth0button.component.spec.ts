import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0buttonComponent } from './auth0button.component';

describe('Auth0buttonComponent', () => {
  let component: Auth0buttonComponent;
  let fixture: ComponentFixture<Auth0buttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0buttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0buttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

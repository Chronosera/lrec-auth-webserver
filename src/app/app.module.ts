import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { MachineViewComponent } from './admin-view/machine-view/machine-view.component';
import { UserListComponent, EditModal } from './admin-view/user-list/user-list.component';
import { SelectedUserComponent } from './admin-view/selected-user/selected-user.component';
import { MachineListComponent } from './user-view/machine-list/machine-list.component';
import { QuizViewComponent } from './user-view/quiz-view/quiz-view.component';
import { QuizListComponent } from './user-view/quiz-view/quiz-list/quiz-list.component';
import { SelectedMachineComponent } from './admin-view/machine-view/selected-machine/selected-machine.component';
import { AdminMachineListComponent } from './admin-view/machine-view/admin-machine-list/admin-machine-list.component';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthGuard } from './auth-guard.service';
import { UserItemComponent } from './admin-view/user-list/user-item/user-item.component';
import { MachineItemComponent } from './admin-view/machine-view/admin-machine-list/machine-item/machine-item.component';
//import { LoginViewComponent } from './login-view/login-view.component';
import { QuizComponent } from './user-view/quiz-view/quiz/quiz.component';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { MainViewComponent } from './main-view/main-view.component';
import { Auth0buttonComponent } from './auth0button/auth0button.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfigService } from './app.jsonrouteconnect';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    UserViewComponent,
    MachineViewComponent,
    UserListComponent,
    SelectedUserComponent,
    MachineListComponent,
    QuizViewComponent,
    QuizListComponent,
    EditModal,
    SelectedMachineComponent,
    AdminMachineListComponent,
    //NavBarComponent,
    DropdownDirective,
    UserItemComponent,
    MachineItemComponent,
    //LoginViewComponent,
    QuizComponent,
    MainViewComponent,
    Auth0buttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-2s75w2xh.us.auth0.com',
      clientId: '8NklWtvMJdz4avipFvoZlTpWaNm9gm0a'
    })
  ],
  exports: [
    MatDialogModule
  ],
  providers: [AuthGuard, AuthService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

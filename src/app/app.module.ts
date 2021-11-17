import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { MachineViewComponent } from './admin-view/machine-view/machine-view.component';
import { UserListComponent } from './admin-view/user-list/user-list.component';
import { SelectedUserComponent } from './admin-view/selected-user/selected-user.component';
import { MachineListComponent } from './user-view/machine-list/machine-list.component';
import { QuizViewComponent } from './user-view/quiz-view/quiz-view.component';
import { QuizListComponent } from './user-view/quiz-view/quiz-list/quiz-list.component';
import { SelectedMachineComponent } from './admin-view/machine-view/selected-machine/selected-machine.component';
import { AdminMachineListComponent } from './admin-view/machine-view/admin-machine-list/admin-machine-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthGuard } from './auth-guard.service';
import { UserItemComponent } from './admin-view/user-list/user-item/user-item.component';
import { MachineItemComponent } from './admin-view/machine-view/admin-machine-list/machine-item/machine-item.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { QuizComponent } from './user-view/quiz-view/quiz/quiz.component';
import { AuthService } from './auth.service';


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
    SelectedMachineComponent,
    AdminMachineListComponent,
    NavBarComponent,
    DropdownDirective,
    UserItemComponent,
    MachineItemComponent,
    LoginViewComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

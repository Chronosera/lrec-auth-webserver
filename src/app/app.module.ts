import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
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
import { LoginViewComponent } from './login-view/login-view.component';

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
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

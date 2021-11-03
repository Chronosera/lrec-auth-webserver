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
import { AdminMachineListComponent } from './admin-view/machine-view/admin-machine-list/admin-machine-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthGuard } from './auth-guard.service';
import { UserItemComponent } from './admin-view/user-list/user-item/user-item.component';
import { MachineItemComponent } from './admin-view/machine-view/admin-machine-list/machine-item/machine-item.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { QuizComponent } from './user-view/quiz-view/quiz/quiz.component';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Material For Table*/
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';



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
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [

    MatCheckboxModule,

    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,

    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,

    MatSelectModule,
    MatSidenavModule,

    MatSortModule,
    MatTableModule,

    MatToolbarModule,
    MatTooltipModule,

    MatFormFieldModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MachineViewComponent } from './admin-view/machine-view/machine-view.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
//import { LoginViewComponent } from './login-view/login-view.component';
import { MachineListComponent } from './user-view/machine-list/machine-list.component';
import { QuizListComponent } from './user-view/quiz-view/quiz-list/quiz-list.component';
import { QuizViewComponent } from './user-view/quiz-view/quiz-view.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  //{ path: '', component: LoginViewComponent },
  { path: 'userView', component: UserViewComponent },
  { path: 'adminView', canActivate: [AuthGuard], component: AdminViewComponent },
  { path: 'quizView',  component: QuizViewComponent },
  { path: 'quizList', component: QuizListComponent },
  { path: 'machineView', canActivate: [AuthGuard], component: MachineViewComponent },
  { path: 'machineList', component: MachineListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

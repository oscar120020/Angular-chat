import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './preAuth.guard';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

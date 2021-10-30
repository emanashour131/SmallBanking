import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/Admin/add/add.component';
import { DeleteUserComponent } from './pages/Admin/delete-user/delete-user.component';
import { ShowAllComponent } from './pages/Admin/show-all/show-all.component';
import { ShowUserDetailsComponent } from './pages/Admin/show-user-details/show-user-details.component';
import { DepositeComponent } from './pages/Transactions/deposite/deposite.component';
import { WithdrawComponent } from './pages/Transactions/withdraw/withdraw.component';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ErrorComponent } from './general/error/error.component';
import { ReportComponent } from './pages/Transactions/report/report.component';
import { ReportwithComponent } from './pages/Transactions/reportwith/reportwith.component';
import { RegisteradComponent } from './pages/adminReg/registerad/registerad.component';
import { LoginadComponent } from './pages/adminReg/loginad/loginad.component';
import { ProfileadComponent } from './pages/adminReg/profilead/profilead.component';
import { LoggedGuardGuard } from './provider/guards/logged-guard.guard';
import { NonLoggedGuardGuard } from './provider/guards/non-logged-guard.guard';
import { NonLoggedAdGuard } from './provider/guards/non-logged-ad.guard';
import { LoggedAdGuard } from './provider/guards/logged-ad.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"user", children:[
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent, canActivate:[NonLoggedGuardGuard]},
    {path:"profile", component:ProfileComponent, canActivate:[LoggedGuardGuard]}
  ]},
  {path:"transactions", children:[
    {path:"deposite", component:DepositeComponent},
    {path:"withdraw", component:WithdrawComponent},
    {path:"report", component:ReportComponent},
    {path:"reportwith", component:ReportwithComponent}
  ]},
  {path:"admin",children:[
    {path:"register",component:RegisteradComponent},
    {path:"", component:LoginadComponent, canActivate:[NonLoggedAdGuard]},
    {path:"profile", component:ProfileadComponent, canActivate:[LoggedAdGuard]}
  ]},
  {path:"adminact", children:[
    {path:"add", component:AddComponent},
    {path:"showAll",component:ShowAllComponent},
    {path:"showUserDetails", component:ShowUserDetailsComponent},
    {path:"delete", component:DeleteUserComponent}
  ]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

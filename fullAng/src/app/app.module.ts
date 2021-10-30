import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { DepositeComponent } from './pages/Transactions/deposite/deposite.component';
import { WithdrawComponent } from './pages/Transactions/withdraw/withdraw.component';
import { AddComponent } from './pages/Admin/add/add.component';
import { ShowAllComponent } from './pages/Admin/show-all/show-all.component';
import { DeleteUserComponent } from './pages/Admin/delete-user/delete-user.component';
import { ShowUserDetailsComponent } from './pages/Admin/show-user-details/show-user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ErrorComponent } from './general/error/error.component';
import { CardsComponent } from './shared/cards/cards.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './provider/interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ReportwithComponent } from './pages/Transactions/reportwith/reportwith.component';
import { ProfileadComponent } from './pages/adminReg/profilead/profilead.component';
import { LoginadComponent } from './pages/adminReg/loginad/loginad.component';
import { RegisteradComponent } from './pages/adminReg/registerad/registerad.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    DepositeComponent,
    WithdrawComponent,
    AddComponent,
    ShowAllComponent,
    DeleteUserComponent,
    ShowUserDetailsComponent,
    ErrorComponent,
    CardsComponent,
    ReportwithComponent,
    ProfileadComponent,
    LoginadComponent,
    RegisteradComponent,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

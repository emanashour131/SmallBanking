import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errLogin =""
  passError=""
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,  Validators.email]),
    password:new FormControl('', [Validators.required])
  })
  constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }

  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}

  login(){
    if(this.loginForm.valid){
      this._global.login(this.loginForm.value).subscribe(
        (data)=>{
          localStorage.setItem('testToken', data.data.token)
          localStorage.setItem("id",data.data.userData._id)
          localStorage.setItem("accountNo", data.data.userData.accountNo)
        },
        (e)=>{console.log(e); this.errLogin=e.error.data
          if(e.error.data.includes('email')) this.errLogin="wrong email or password"
          if(e.error.data.includes('password')) this.passError="wrong email or password"
          
        },
        ()=>{
          this.errLogin=""
          this.passError=""
          this._global.isAuthed=true
          this.router.navigate(["/user/profile"])
        }
      )
    }
  }

}

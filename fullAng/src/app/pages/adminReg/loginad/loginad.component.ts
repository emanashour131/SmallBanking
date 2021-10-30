import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-loginad',
  templateUrl: './loginad.component.html',
  styleUrls: ['./loginad.component.css']
})
export class LoginadComponent implements OnInit {

  errLogin =""
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,  Validators.email]),
    password:new FormControl('', [Validators.required])
  })
  constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }

  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}

  login(){
    if(this.loginForm.valid){
      this._global.loginAdmin(this.loginForm.value).subscribe(
        (data)=>{
          localStorage.setItem('testToken', data.data.token)
          localStorage.setItem("id",data.data.userData._id)
          
        },
        (e)=>{console.log(e); this.errLogin=e.error.data},
        ()=>{
          this.errLogin=""
          this._global.isAuthAdmin=true
          this.router.navigate(["/admin/profile"])
          localStorage.setItem("isAdminAuth",String(this._global.isAuthAdmin))
          localStorage.setItem("isAdmin",String(this._global.isAdmin))
        }
      )
    }
  }

}

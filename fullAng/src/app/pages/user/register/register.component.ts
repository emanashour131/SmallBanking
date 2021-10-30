import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailError=""
  AccountError=""
  userData = { name:"", email:"", password:"", phone:"", accountNo:"" }
  constructor(private _global:GlobalService, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this._global.isAdmin=false
  }

  register(registerUser:NgForm){
    if(registerUser.valid){
      this._global.registerUser(this.userData).subscribe(
        (res)=>{console.log(res)},
        (err)=>{
          if(err.error.data.includes('email')) this.emailError="email used before"
          if(err.error.data.includes('e is not defined')) this.AccountError="Account Number not valid"
          if(err.error.data.includes('accountNo')) this.AccountError="Account Number used before"
        },
        ()=>{
          this.emailError=""
          this.AccountError=""
          registerUser.resetForm()
          
          this.toastr.success('Success', 'Registered');
          
          setTimeout(()=>{
            this.router.navigateByUrl('/user/login')
          },500)
        }
      )
    }
  }

}

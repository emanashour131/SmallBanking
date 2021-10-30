import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registerad',
  templateUrl: './registerad.component.html',
  styleUrls: ['./registerad.component.css']
})
export class RegisteradComponent implements OnInit {

  emailError=""
  AccountError=""
  AdminData = { name:"", email:"", password:"", phone:"",adminId:""}
  constructor(private _global:GlobalService, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }

  register(registerAdmin:NgForm){
    if(registerAdmin.valid){
      this._global.registerAdmin(this.AdminData).subscribe(
        (res)=>{console.log(res)},
        (err)=>{
          if(err.error.data.includes('email')) this.emailError="email used before"
          if(err.error.data.includes('adminId')) this.AccountError="ID not valid"
        },
        ()=>{
          this.emailError=""
          this.AccountError=""
          registerAdmin.resetForm()
          
          this.toastr.success('Success', 'Registered');
          
          setTimeout(()=>{
            this.router.navigateByUrl('/admin')
          },500)
        }
      )
    }
  }

}

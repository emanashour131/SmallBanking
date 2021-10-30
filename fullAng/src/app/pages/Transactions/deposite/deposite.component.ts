import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {
  err=""

  depositeForm = new FormGroup({
    value : new FormControl('', [Validators.min(1000),Validators.max(50000)])
  })
  constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }

  get value(){ return this.depositeForm.get("value")}

  deposite(){
    
    if(this.depositeForm.valid){
      this._global.deposite(this.depositeForm.value).subscribe(
        (data)=>{
          // localStorage.setItem('testToken', data.data.token)
          // localStorage.setItem("id",data.data.userData._id)
          // localStorage.setItem("accountNo", data.data.userData.accountNo)
        },
        (e)=>{console.log(e); this.err=e.error.data},
        ()=>{
          this.err=""
          //this._global.isAuthed=true
          this.router.navigate(["/transactions/report"])
        }
      )
    }
  }
  }


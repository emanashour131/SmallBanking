import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  err=""

  withdrawForm = new FormGroup({
    to :new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
    value : new FormControl('', [Validators.required])
  })

  
  constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }
  get to(){ return this.withdrawForm.get("to")}
  get value(){ return this.withdrawForm.get("value")}

  Withdraw(){
    if(this.withdrawForm.valid){
      this._global.withdraw(this.withdrawForm.value).subscribe(
        (data)=>{
          // localStorage.setItem('testToken', data.data.token)
          // localStorage.setItem("id",data.data.userData._id)
          // localStorage.setItem("accountNo", data.data.userData.accountNo)
        },
        (e)=>{console.log(e); this.err=e.error.data
          if(e.error.message.includes('account')) this.err="your balance not enough"
        },
        ()=>{
          this.err=""
          //this._global.isAuthed=true
          this.router.navigate(["/transactions/reportwith"])
        }
      )
    }
  }
}

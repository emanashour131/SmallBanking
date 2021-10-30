import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  AccountError=""
  isDeleted=false
  userdata:any=[]
  deleteForm = new FormGroup({
    accountNo:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)])
  })
  constructor( private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }
  get accountNo(){ return this.deleteForm.get("accountNo")}

  delete(){
    if(this.deleteForm.valid){
      this._global.delete(this.deleteForm.value).subscribe(
        (data)=>{   
        },
        (e)=>{console.log(e); 
          if(e.error.message.includes('user')) this.AccountError="Account nto found"
        },
        ()=>{
          this.AccountError=""
          this.isDeleted = true
        }
      )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  nameError=""
  AccountError=""
  err =""
  addForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    accountNo:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
    value:new FormControl('',Validators.required)
  })
  constructor(private _global:GlobalService,private router:Router ) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }
  get name(){ return this.addForm.get("name")}
  get accountNo(){ return this.addForm.get("accountNo")}
  get value(){ return this.addForm.get("value")}

  add(){
    if(this.addForm.valid){
      this._global.addUser(this.addForm.value).subscribe(
        (data)=>{
        },
        (e)=>{console.log(e); 
          if(e.error.data.includes('name')) this.nameError="userName is invalid"
          if(e.error.data.includes('accountNo')) this.AccountError="Account Number not valid"
        },
        ()=>{
          this.nameError=""
          this.AccountError=""
          this.router.navigate(["/adminact/showAll"])
        }
      )
    }
  }

}

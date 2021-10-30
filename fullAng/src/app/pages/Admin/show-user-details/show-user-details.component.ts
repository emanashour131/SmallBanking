import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.css']
})
export class ShowUserDetailsComponent implements OnInit {
  AccountError=""
  isOrderd=false
  userdata:any=[]
  searchForm = new FormGroup({
    accountNo:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)])
  })
  constructor( private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }
  get accountNo(){ return this.searchForm.get("accountNo")}

  search(){
    if(this.searchForm.valid){
      this._global.details(this.searchForm.value).subscribe(
        (data)=>{this.userdata = data.data  
                  console.log(this.userdata)      
        },
        (e)=>{console.log(e); 
          if(e.error.data.includes('e')) this.AccountError="Account Number not valid"
        },
        ()=>{
          this.AccountError=""
          this.isOrderd = true
          //this.router.navigate(["/adminact/UserDetails"])
        }
      )
    }
  }

}

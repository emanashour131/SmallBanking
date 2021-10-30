import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  isLoaded = false
  constructor(public _global:GlobalService, public _router:Router) { }

  ngOnInit(): void {
    this._global.profileAdmin().subscribe(
      (data)=> {this._global.userData = data.data, this._global.isAuthAdmin=true,this._global.isAdmin=true},
      (e)=>{this._global.isAuthAdmin=false, this.isLoaded=true},
      ()=>{ this.isLoaded=true}
    )
  }

  
  logout(){
    this._global.logoutAdmin().subscribe(
      (data)=>{},
      (e)=>{},
      ()=>{
        localStorage.removeItem('testToken')
        localStorage.removeItem('id')
        this._global.isAuthAdmin=false
        this._global.userData=null
        this._router.navigateByUrl('/')            
      }
    )

  }

}

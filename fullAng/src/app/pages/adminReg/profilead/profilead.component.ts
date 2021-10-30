import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
@Component({
  selector: 'app-profilead',
  templateUrl: './profilead.component.html',
  styleUrls: ['./profilead.component.css']
})
export class ProfileadComponent implements OnInit {

  userdata:any=[]
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.isAdmin=true
    //this._global.isAuthAdmin=true
    this.profile()
    

  }

  profile(){
    this._global.profileAdmin().subscribe(data=>{
      this.userdata = data.data
      console.log(this.userdata)
    })
  }

}

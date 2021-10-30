import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData:any={}
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this.profile()
  }

  profile(){
    this._global.profile().subscribe(data=>{
      this.userData = data.data
      console.log(this.userData)
    })
  }

}

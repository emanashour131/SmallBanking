import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  usersdata:any=[]
  constructor( private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.isAdmin=true
    this.showall()
  }

  showall(){
    this._global.showall().subscribe(data=>{
      this.usersdata = data.data
      console.log(this.usersdata)
    })
  }



}
